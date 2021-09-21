package com.recipefinder.recipefinder.services;

import com.recipefinder.recipefinder.dto.mappers.PlannedMealMapper;
import com.recipefinder.recipefinder.dto.models.PlannedRecipeDto;
import com.recipefinder.recipefinder.models.PartOfTheDay;
import com.recipefinder.recipefinder.models.PlannedMeal;
import com.recipefinder.recipefinder.repository.PlannedMealRepository;
import com.recipefinder.recipefinder.repository.RecipeRepository;
import com.recipefinder.recipefinder.repository.authentication.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class PlannedMealService {
    @Autowired
    PlannedMealRepository plannedMealRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    RecipeRepository recipeRepository;


    public void planMeal(Long userId, Long recipeId, PartOfTheDay partOfTheDay, Date date) {
        var user = userRepository.findById(userId).orElseThrow();
        var recipe = recipeRepository.findById(recipeId).orElseThrow();
        PlannedMeal meal = new PlannedMeal(
                date,
                partOfTheDay,
                recipe,
                user
        );
        var found = plannedMealRepository.findByRecipe(recipe);
        if (found != null) {
            plannedMealRepository.delete(found);
        }
        plannedMealRepository.save(meal);
    }

    public List<PlannedRecipeDto> getAll() {
        List<PlannedRecipeDto> result = new ArrayList<>();
        plannedMealRepository.findAll().forEach(plan ->
                result.add(PlannedMealMapper.toPlannedDto(plan)));
        return result;
    }

    public void deleteMeal(Long id, Long userId) {
        var meal = plannedMealRepository.findById(id).orElse(null);
        if (meal != null) {
            if (meal.getUser().getId().equals(userId))
                plannedMealRepository.deleteById(id);
        }
    }

    public List<PlannedRecipeDto> getForDate(Date date) {
        List<PlannedRecipeDto> result = new ArrayList<>();
        plannedMealRepository.findAllByPlannedFor(date).forEach(plan ->
                result.add(PlannedMealMapper.toPlannedDto(plan)));
        return result;
    }
}
