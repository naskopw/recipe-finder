package com.recipefinder.recipefinder.controllers.api.v1;

import com.recipefinder.recipefinder.dto.models.RecipeDetailsDto;
import com.recipefinder.recipefinder.dto.models.RecipeOverviewDto;
import com.recipefinder.recipefinder.services.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class RecipeController {
    private final RecipeService recipeService;

    @GetMapping("/recipes/{id}")
    public ResponseEntity<RecipeDetailsDto> recipeDetails(@PathVariable Long id) {
        return ResponseEntity.ok().body(recipeService.getRecipeById(id));
    }

    @GetMapping("/recipes/trending")
    public List<RecipeOverviewDto> trendingRecipes() {
        return recipeService.trending();
    }
}
