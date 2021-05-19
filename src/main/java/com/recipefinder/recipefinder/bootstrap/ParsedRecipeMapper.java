package com.recipefinder.recipefinder.bootstrap;

import com.recipefinder.recipefinder.models.*;

import java.util.stream.Collectors;

public class ParsedRecipeMapper {
    public static Recipe toRecipe(ParsedRecipe parsedRecipe) {
        var recipe = new Recipe();
        recipe.setTitle(parsedRecipe.getTitle());
        recipe.setDescription(parsedRecipe.getDescription());
        recipe.setTime(parsedRecipe.getTime());
        recipe.setServings(parsedRecipe.getServings());
        recipe.setRecipeImages(parsedRecipe.getImages()
                .stream()
                .map(src -> new RecipeImage(src, recipe)).collect(Collectors.toList()));
        recipe.setIngredients(parsedRecipe.getIngredients()
                .stream()
                .map(text -> new Ingredient(text, recipe)).collect(Collectors.toList()));
        recipe.setInstructionSteps(parsedRecipe.getInstructionSteps()
                .stream()
                .map(text -> new InstructionStep(text.replaceAll("\\s+", " "), recipe))
                .collect(Collectors.toList()));

        recipe.setCategories(parsedRecipe.getProductNames()
                .stream()
                .map(productName -> new Category(productName, null))
                .collect(Collectors.toList()));
        return recipe;
    }
}
