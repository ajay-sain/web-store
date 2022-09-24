package com.webstore.product.repository;

import com.webstore.product.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.name LIKE %:str% or p.description LIKE %:str%")
    public List<Product> findByNameIsContainingOrDescriptionIsContaining(@Param("str") String str);
}