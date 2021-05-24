package com.recipefinder.recipefinder.dto.mappers;

import com.recipefinder.recipefinder.dto.models.RecipeOverviewDto;
import com.recipefinder.recipefinder.models.Recipe;
import com.recipefinder.recipefinder.models.RecipeImage;

import java.util.stream.Collectors;

public class RecipeOverviewMapper {
    public static RecipeOverviewDto toRecipeOverviewDto(Recipe recipe) {
        var dto = new RecipeOverviewDto();
        dto.setId(recipe.getId());
        dto.setTitle(recipe.getTitle());
        dto.setTime(recipe.getTime());
        dto.setImage(recipe.getRecipeImages().iterator().next().getSrc());
        dto.setServings(recipe.getServings());
        return dto;
    }
}
