package com.recipefinder.recipefinder.controllers.v1.api;

import com.recipefinder.recipefinder.dto.models.CategoryDto;
import com.recipefinder.recipefinder.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @RequestMapping("/api/categories")
    public Iterable<CategoryDto> categories(@RequestParam String startsWith) {
        return categoryService.getCategoryByNameStart(startsWith);
    }

    @RequestMapping("/api/categories/{id}")
    public CategoryDto categoryDetails(@PathVariable Long id) {
        return categoryService.getCategoryById(id);
    }
}
