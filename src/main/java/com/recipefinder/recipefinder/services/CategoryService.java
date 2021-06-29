package com.recipefinder.recipefinder.services;

import com.recipefinder.recipefinder.dto.mappers.CategoryMapper;
import com.recipefinder.recipefinder.dto.models.CategoryDto;
import com.recipefinder.recipefinder.dto.responses.CategoryNotFoundException;
import com.recipefinder.recipefinder.models.Category;
import com.recipefinder.recipefinder.repository.CategoryRepository;
import org.hibernate.annotations.Cache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    public CategoryDto getCategoryById(long id) {
        Optional<Category> category = categoryRepository.findById(id);
        if (category.isPresent()) {
            return CategoryMapper.toCategoryDto(category.get());
        } else {
            throw new CategoryNotFoundException();
        }
    }

    public Iterable<CategoryDto> getCategories() {
        return StreamSupport.stream(categoryRepository.findAll().spliterator(), false)
                .map(CategoryMapper::toCategoryDto)
                .collect(Collectors.toList());
    }

    public Iterable<CategoryDto> getCategoryByNameStart(String start) {
        return StreamSupport
                .stream(categoryRepository.findByNameStartsWith(start).spliterator(), false)
                .map(CategoryMapper::toCategoryDto)
                .collect(Collectors.toList());
    }
}
