package com.recipefinder.recipefinder.controllers.v1.api;

import com.recipefinder.recipefinder.dto.models.RecipeDetailsDto;
import com.recipefinder.recipefinder.services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RecipeController {
    @Autowired
    RecipeService recipeService;

    @RequestMapping("/api/recipes/{id}")
    public RecipeDetailsDto recipeDetails(@PathVariable Long id) {

        return recipeService.getRecipeById(id);
    }
}
