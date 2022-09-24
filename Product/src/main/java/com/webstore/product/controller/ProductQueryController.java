package com.webstore.product.controller;

import com.webstore.product.model.Product;
import com.webstore.product.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/product")
public class ProductQueryController {

    @Autowired
    private ProductService service;

    @GetMapping("/s")
    public List<Product> searchProducts(@RequestParam(name = "k", defaultValue = "") String k,
            @RequestParam(name = "color", defaultValue = "") String color,
            @RequestParam(name = "category", defaultValue = "") String category,
            @RequestParam(name = "brand", defaultValue = "") String brand,
            @RequestParam(name = "priceL", defaultValue = "") Long priceL,
            @RequestParam(name = "priceH", defaultValue = "") Long priceH){
        return service.searchByName(k);
    }

}