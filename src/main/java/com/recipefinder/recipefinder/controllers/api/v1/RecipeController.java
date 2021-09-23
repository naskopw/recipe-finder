package com.recipefinder.recipefinder.controllers.api.v1;

import com.recipefinder.recipefinder.dto.models.RecipeDetailsDto;
import com.recipefinder.recipefinder.dto.models.RecipeOverviewDto;
import com.recipefinder.recipefinder.services.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/recipes")
public class RecipeController {
    private final RecipeService recipeService;

    @GetMapping("/{id}")
    public ResponseEntity<RecipeDetailsDto> recipeDetails(@PathVariable Long id) {
        return ResponseEntity.ok().body(recipeService.getRecipeById(id));
    }

    @GetMapping("/trending")
    public List<RecipeOverviewDto> trendingRecipes() {
        return recipeService.trending();
    }
}
