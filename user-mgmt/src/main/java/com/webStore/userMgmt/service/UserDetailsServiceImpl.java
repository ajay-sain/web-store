package com.webStore.userMgmt.service;

import com.webStore.userMgmt.dto.RegistrationRequestDto;
import com.webStore.userMgmt.dto.UserAccountDto;
import com.webStore.userMgmt.mapper.AccountMapper;
import com.webStore.userMgmt.model.Account;
import com.webStore.userMgmt.model.Roles;
import com.webStore.userMgmt.repository.AccountRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Slf4j
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private AccountRepository repo;

    @Autowired
    protected PasswordEncoder passwordEncoder;

    public Account createAccount(RegistrationRequestDto request){
        ArrayList<Roles> roles = new ArrayList<Roles>();
        roles.add(Roles.USER_READ);
        roles.add(Roles.USER_WRITE);
        Account account = Account.builder()
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .name(request.getName())
                        .accountNonExpired(true)
                        .accountNonLocked(true)
                        .enabled(true)
                        .credentialsNonExpired(true)
                        .roles(roles).build();
        return repo.save(account);
    }

    public Account getUserByEmail(String email) {
        return repo.findOneByEmail(email);
    }

    public UserAccountDto getUserDtoByEmail(String subject) throws UsernameNotFoundException{
        Account userAccount = getUserByEmail(subject);
        return UserAccountDto.builder().id(userAccount.getId())
                .roles(userAccount.getRoles())
                .email(userAccount.getEmail())
                .name(userAccount.getName())
                .build();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return getUserByEmail(username);
    }
}

