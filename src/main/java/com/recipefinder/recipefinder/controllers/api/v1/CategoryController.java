package com.recipefinder.recipefinder.controllers.api.v1;

import com.recipefinder.recipefinder.dto.models.CategoryDto;
import com.recipefinder.recipefinder.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/")
    public Iterable<CategoryDto> categories(@RequestParam String startsWith) {
        return categoryService.getCategoryByNameStart(startsWith);
    }

    @GetMapping("/{id}")
    public CategoryDto categoryDetails(@PathVariable Long id) {
        return categoryService.getCategoryById(id);
    }
}
