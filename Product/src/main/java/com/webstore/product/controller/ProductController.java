package com.webstore.product.controller;

import com.webstore.product.dto.ProductCreateRequestDto;
import com.webstore.product.dto.ProductUpdateRequestDto;
import com.webstore.product.model.Product;
import com.webstore.product.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/api/v1/product")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/type")
    public List<String> getProductTypes(){
        return service.getProductType();
    }

    @GetMapping
    public List<Product> getProducts(){
        return service.getProducts();
    }

    @PostMapping
    public ResponseEntity<?> addProduct(@RequestBody ProductCreateRequestDto request){
        return ResponseEntity.ok(service.addProduct(request));
    }

    @PutMapping
    public ResponseEntity<?> updateProduct(@RequestBody ProductUpdateRequestDto request){
        return ResponseEntity.ok(service.updateProduct(request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable(name = "id") Long id){
        service.deleteProduct(id);
        return ResponseEntity.ok("The Item has been deleted");
    }

}
