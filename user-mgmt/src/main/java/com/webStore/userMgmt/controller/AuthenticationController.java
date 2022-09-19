package com.webStore.userMgmt.controller;

import com.webStore.userMgmt.dto.JwtAuthResponse;
import com.webStore.userMgmt.dto.LoginRequestDto;
import com.webStore.userMgmt.service.JWTService;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.http.parser.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.Collections;

@Slf4j
@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin(origins="*", maxAge=3600)
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JWTService jwtService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequestDto requestDto,
                                           HttpServletResponse response) throws AuthenticationException {
        log.debug("---------------------------------------------------------debug---------------------------------------------------------");
        log.debug("Login request received by: {}",requestDto.getEmail());
        try{
            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(requestDto.getEmail(), requestDto.getPassword());
            Authentication authentication = authenticationManager.authenticate(authenticationToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);

            String jwtToken = jwtService.generateToken(authentication);
            response.setHeader("Authorization", "Bearer " + jwtToken );
            return ResponseEntity.ok(new JwtAuthResponse("Bearer " + jwtToken));
        }catch(AuthenticationException e){
            log.error("---------------------------------------------------------error---------------------------------------------------------");
            log.error("{}", e.getStackTrace());
            return new ResponseEntity<>(Collections.singletonMap("Authentication",e.getLocalizedMessage()), HttpStatus.UNAUTHORIZED);
        }
    }

}
