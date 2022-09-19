package com.webStore.userMgmt.controller;

import com.webStore.userMgmt.dto.RegistrationRequestDto;
import com.webStore.userMgmt.model.Account;
import com.webStore.userMgmt.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class Registration {

    @Autowired
    private UserDetailsServiceImpl registrationService;

    @PostMapping("/register")
    public Account registerUser(@RequestBody RegistrationRequestDto requestDto){
        return registrationService.createAccount(requestDto);
    }
}
