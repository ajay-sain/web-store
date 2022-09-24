package com.webstore.product.mapper;

import com.webstore.product.dto.ProductCreateRequestDto;
import com.webstore.product.model.Product;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProductMapper {

     public Product requestDtoToEntity(ProductCreateRequestDto dto);
}
