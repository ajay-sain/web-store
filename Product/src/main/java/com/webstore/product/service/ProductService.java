package com.webstore.product.service;

import com.webstore.product.dto.ProductCreateRequestDto;
import com.webstore.product.dto.ProductUpdateRequestDto;
import com.webstore.product.mapper.ProductMapper;
import com.webstore.product.model.Product;
import com.webstore.product.model.ProductType;
import com.webstore.product.repository.ProductRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
public class ProductService {

    @Autowired
    private ProductRepository repo;

    @Autowired
    private ProductMapper mapper;

    public List<String> getProductType(){
        List<String> list = new ArrayList<String>();
        for(ProductType type: ProductType.values()){
            list.add(type.name());
        }
        return list;
    }

    public Product addProduct(ProductCreateRequestDto dto) {
        Product product = mapper.requestDtoToEntity(dto);
        return repo.save(product);
    }

    public Boolean updateProduct(ProductUpdateRequestDto dto) {
        try{
            Optional<Product> productQueryResponse = repo.findById(dto.getId());
            if(productQueryResponse.isPresent()){
                Product product = productQueryResponse.get();
                product.setDescription(dto.getDescription());
                product.setPrice(dto.getPrice());
                product.setAvailableQuantity(dto.getAvailableQuantity());
                product.setDiscount(dto.getDiscount());
                repo.save(product);
                return true;
            }
            return false;
        }
        catch(Exception e){
            log.error("{}",e);
            return false;
        }
    }

    public void deleteProduct(Long id) {
        repo.deleteById(id);
    }

    public List<Product> getProducts() {
        return repo.findAll();
    }

    public List<Product> searchByName(String str) {
        log.info("query string{}", str);
        return repo.findByNameIsContainingOrDescriptionIsContaining(str);
    }
}
