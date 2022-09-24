package com.webstore.product.dto;

import com.webstore.product.model.ProductType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductCreateRequestDto {
    private String name;
    private String description;
    private Double price;
    private int availableQuantity;
    private int discount;
    private String size;
    private String color;
    private ProductType category;
    private String brand;
    private String seller;
}
