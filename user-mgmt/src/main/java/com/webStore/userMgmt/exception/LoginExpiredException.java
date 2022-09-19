package com.webStore.userMgmt.exception;

import org.springframework.security.core.AuthenticationException;

public class LoginExpiredException extends AuthenticationException {
    public LoginExpiredException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public LoginExpiredException(String msg) {
        super(msg);
    }
}
