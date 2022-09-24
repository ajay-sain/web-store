package com.webstore.product.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
public class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    private String addressLine1;
    private String addressLine2;
    private String addressLine3;
    private String city;
    private String state;
//    private List<WorkingDays> workingDays;
}
