package com.recipefinder.recipefinder.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.recipefinder.recipefinder.bootstrap.ParsedRecipe;
import com.recipefinder.recipefinder.bootstrap.ParsedRecipeMapper;
import com.recipefinder.recipefinder.models.Category;
import com.recipefinder.recipefinder.models.Recipe;
import com.recipefinder.recipefinder.repository.CategoryRepository;
import com.recipefinder.recipefinder.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.stream.Collectors;

@Service
public class DBSeedService {
    public static final String RECIPE_BOOTSTRAP_FILE = "src/main/java/com/recipefinder/recipefinder/bootstrap/recipes.json";
    private ParsedRecipe[] parsedRecipes;
    @Autowired
    private RecipeRepository recipeRepository;
    @Autowired
    private CategoryRepository categoryRepository;

    private void loadRecipesFromJson() {
        File file = new File(RECIPE_BOOTSTRAP_FILE);
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            parsedRecipes = objectMapper.readValue(file, ParsedRecipe[].class);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void populateDB() {
        loadRecipesFromJson();
        var allRecipes = new HashSet<Recipe>();
        var allCategories = new HashSet<Category>();
        for (ParsedRecipe parsedRecipe : parsedRecipes) {
            var recipe = createRecipe(parsedRecipe);
            allRecipes.add(recipe);
            allCategories.addAll(recipe.getCategories());
        }
        recipeRepository.saveAll(allRecipes);
        categoryRepository.saveAll(mapCategoriesToRecipes(allRecipes, allCategories));
    }

    private Recipe createRecipe(ParsedRecipe parsedRecipe) {
        return ParsedRecipeMapper.toRecipe(parsedRecipe);
    }

    private HashSet<Category> mapCategoriesToRecipes(HashSet<Recipe> allRecipes, HashSet<Category> allCategories) {
        for (var category : allCategories) {
            var recipes = allRecipes.stream().filter(recipe ->
                    recipe.getCategories()
                            .stream()
                            .map(Category::getName)
                            .collect(Collectors.toList()).contains(category.getName())
            ).collect(Collectors.toList());
            category.getRecipeList().addAll(recipes);
        }
        return allCategories;
    }
}
