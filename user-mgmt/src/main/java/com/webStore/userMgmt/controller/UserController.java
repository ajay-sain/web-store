package com.webStore.userMgmt.controller;

import com.webStore.userMgmt.dto.UserAccountDto;
import com.webStore.userMgmt.exception.LoginExpiredException;
import com.webStore.userMgmt.service.JWTService;
import com.webStore.userMgmt.service.UserDetailsServiceImpl;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Collections;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private JWTService jwtService;

    @Autowired
    private UserDetailsServiceImpl accountService;

    @GetMapping("/hello")
    public String hello() {
        return "hello";
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException, UsernameNotFoundException {
        try {
            String token = request.getHeader("Authorization");
            if(token == null)
                throw new LoginExpiredException("Authentication Failure");
            token = token.split(" ")[1];
            if (!jwtService.isTokenExpired(token)) {
                String subject = jwtService.getSubjectFromToken(token);
                UserAccountDto dto  = accountService.getUserDtoByEmail(subject);
                return ResponseEntity.ok(dto);
            } else {
                throw new LoginExpiredException("Login Expired");
            }
        }
        catch(ExpiredJwtException | AuthenticationException e){
            log.error("---------------------------------------------------------error---------------------------------------------------------");
            log.error("{}", e.getStackTrace());
            return new ResponseEntity<>(Collections.singletonMap("Authentication",e.getLocalizedMessage()), HttpStatus.UNAUTHORIZED);
        }
    }
}
