package com.recipefinder.recipefinder.services;

import com.recipefinder.recipefinder.dto.mappers.RecipeDetailsMapper;
import com.recipefinder.recipefinder.dto.models.RecipeDetailsDto;
import com.recipefinder.recipefinder.dto.responses.RecipeNotFoundException;
import com.recipefinder.recipefinder.models.Recipe;
import com.recipefinder.recipefinder.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RecipeService {
    @Autowired
    RecipeRepository recipeRepository;

    public RecipeDetailsDto getRecipeById(long id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        if (recipe.isPresent()) {
            return RecipeDetailsMapper.toRecipeDetailsDto(recipe.get());
        } else {
            throw new RecipeNotFoundException();
        }
    }
}
