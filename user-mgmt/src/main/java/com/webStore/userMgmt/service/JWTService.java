package com.webStore.userMgmt.service;

import com.webStore.userMgmt.model.Account;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.stream.Collectors;

@Slf4j
@Service
public class JWTService {

    @Value("${security.secret.key}")
    private String secretKey;

    @Value("${security.issuer}")
    private String issuer;

    private static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60 * 1000;

    private Claims getAllClaimsFromToken(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    }

    public String generateToken(Authentication authentication){
        HashMap<String, Object> claims = new HashMap<>();
        claims.put("roles",
                authentication.getAuthorities().stream()
                        .map(GrantedAuthority::getAuthority)
                        .collect(Collectors.joining(",")));
        Account account = (Account) authentication.getPrincipal();

        return Jwts.builder().setClaims(claims)
                .setId(String.valueOf(account.getId()))
                .setSubject(account.getEmail())
                .setIssuer(issuer)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY ))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }

    public boolean isTokenExpired(String token) throws ExpiredJwtException {
        final Date expiration = getAllClaimsFromToken(token).getExpiration();
        log.info("expiration: {}",expiration);
        return expiration.before(new Date());
    }

    public String getSubjectFromToken(String token) {
        return getAllClaimsFromToken(token).getSubject();
    }
}
