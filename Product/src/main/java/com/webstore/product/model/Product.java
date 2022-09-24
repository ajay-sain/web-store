package com.webstore.product.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    private String description;
    @Column(nullable = false)
    private Double price;
    @Column(nullable = false)
    private int availableQuantity;
    private int discount;
    private String size;
    private String color;
    @Enumerated
    private ProductType category;
    private String brand;
}
