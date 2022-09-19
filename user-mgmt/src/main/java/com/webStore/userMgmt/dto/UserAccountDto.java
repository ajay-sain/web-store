package com.webStore.userMgmt.dto;

import com.webStore.userMgmt.model.Roles;
import lombok.*;

import java.util.ArrayList;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserAccountDto {
    private Long id;
    private String name;
    private String email;
    private ArrayList<Roles> roles;
}
