package com.webStore.userMgmt.mapper;

import com.webStore.userMgmt.dto.RegistrationRequestDto;
import com.webStore.userMgmt.model.Account;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.ReportingPolicy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

//@Mapper(componentModel = "spring",
//        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public abstract class AccountMapper {

//    @Autowired
//    protected PasswordEncoder passwordEncoder;
//
//    @Mappings({
//            @Mapping(target = "roles", ignore = true),
//            @Mapping(target = "id", ignore = true),
//            @Mapping(target = "password", expression = "java(passwordEncoder.encode(request.getPassword()))")
//    })
//    public abstract Account registrationDtoToModel(RegistrationRequestDto request);

}
