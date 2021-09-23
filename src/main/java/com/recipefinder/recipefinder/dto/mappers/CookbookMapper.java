package com.recipefinder.recipefinder.dto.mappers;

import com.recipefinder.recipefinder.dto.models.CookbookDto;
import com.recipefinder.recipefinder.dto.models.GroceryDto;
import com.recipefinder.recipefinder.models.Cookbook;
import com.recipefinder.recipefinder.models.GroceryItem;

import java.util.stream.Collectors;

public class CookbookMapper {
    public static CookbookDto toCookbookDto(Cookbook cookbook) {
        return new CookbookDto(
                cookbook.getId(),
                cookbook.getTitle(),
                cookbook.getImage(),
                cookbook.getRecipes().stream()
                        .map(RecipeOverviewMapper::toRecipeOverviewDto)
                        .collect(Collectors.toList()));
    }
}
