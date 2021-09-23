package com.recipefinder.recipefinder.dto.mappers;

import com.recipefinder.recipefinder.dto.models.PlannedRecipeDto;
import com.recipefinder.recipefinder.models.PartOfTheDay;
import com.recipefinder.recipefinder.models.PlannedMeal;
import com.recipefinder.recipefinder.models.Recipe;
import com.recipefinder.recipefinder.models.requests.PlanningRequest;

import java.util.Date;

public class PlannedMealMapper {
    public static PlannedRecipeDto toPlannedDto(PlannedMeal plannedMeal) {
        return new PlannedRecipeDto(plannedMeal);
    }
}
