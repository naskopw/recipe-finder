package com.recipefinder.recipefinder.dto.mappers;

import com.recipefinder.recipefinder.dto.models.CategoryDto;
import com.recipefinder.recipefinder.models.Category;

import java.util.stream.Collectors;

public class CategoryMapper {
    public static CategoryDto toCategoryDto(Category category) {
        var dto = new CategoryDto();
        dto.setName(category.getName());
        dto.setId(category.getId());
        dto.setRecipeOverviewDtoList(category.getRecipeList()
                .stream()
                .map(RecipeOverviewMapper::toRecipeOverviewDto).collect(Collectors.toList()));
        return dto;
    }
}
