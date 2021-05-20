package com.recipefinder.recipefinder.dto.mappers;

import com.recipefinder.recipefinder.dto.models.RecipeDetailsDto;
import com.recipefinder.recipefinder.models.Ingredient;
import com.recipefinder.recipefinder.models.InstructionStep;
import com.recipefinder.recipefinder.models.Recipe;
import com.recipefinder.recipefinder.models.RecipeImage;

import java.util.stream.Collectors;

public class RecipeDetailsMapper {
    public static RecipeDetailsDto toRecipeDetailsDto(Recipe recipe) {
        var dto = new RecipeDetailsDto();
        dto.setId(recipe.getId());
        dto.setTitle(recipe.getTitle());
        dto.setDescription(recipe.getDescription());
        dto.setTime(recipe.getTime());
        dto.setServings(recipe.getServings());
        dto.setIngredients(recipe.getIngredients()
                .stream()
                .map(Ingredient::getText)
                .collect(Collectors.toList()));
        dto.setSteps(recipe.getInstructionSteps()
                .stream()
                .map(InstructionStep::getText)
                .collect(Collectors.toList()));
        dto.setImages(recipe.getRecipeImages()
                .stream()
                .map(RecipeImage::getSrc)
                .collect(Collectors.toList()));
        return dto;
    }
}
