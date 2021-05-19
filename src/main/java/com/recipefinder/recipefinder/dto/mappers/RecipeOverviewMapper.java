package com.recipefinder.recipefinder.dto.mappers;

import com.recipefinder.recipefinder.dto.models.RecipeOverviewDto;
import com.recipefinder.recipefinder.models.Recipe;

public class RecipeOverviewMapper {
    public static RecipeOverviewDto toRecipeOverviewDto(Recipe recipe) {
        var dto = new RecipeOverviewDto();
        dto.setTitle(recipe.getTitle());
        dto.setTime(recipe.getTime());
        dto.setServings(recipe.getServings());
        return dto;
    }
}
