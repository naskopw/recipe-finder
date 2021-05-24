package com.recipefinder.recipefinder.services;

import com.recipefinder.recipefinder.dto.mappers.RecipeDetailsMapper;
import com.recipefinder.recipefinder.dto.mappers.RecipeOverviewMapper;
import com.recipefinder.recipefinder.dto.models.RecipeDetailsDto;
import com.recipefinder.recipefinder.dto.models.RecipeOverviewDto;
import com.recipefinder.recipefinder.dto.responses.RecipeNotFoundException;
import com.recipefinder.recipefinder.models.Recipe;
import com.recipefinder.recipefinder.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class RecipeService {
    @Autowired
    RecipeRepository recipeRepository;

    private static final int TRENDING_SIZE = 10;

    public RecipeDetailsDto getRecipeById(long id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        if (recipe.isPresent()) {
            return RecipeDetailsMapper.toRecipeDetailsDto(recipe.get());
        } else {
            throw new RecipeNotFoundException();
        }
    }

    public List<RecipeOverviewDto> trending() {
        Random r = new Random();
        var recipes = new ArrayList<RecipeOverviewDto>();
        recipeRepository.findAll()
                .forEach(rec -> recipes.add(RecipeOverviewMapper.toRecipeOverviewDto(rec)));
        int startIndex = r.nextInt(recipes.size() - TRENDING_SIZE);
        return recipes.subList(startIndex, startIndex + TRENDING_SIZE);
    }
}
