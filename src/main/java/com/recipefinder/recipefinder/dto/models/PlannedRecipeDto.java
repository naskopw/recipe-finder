package com.recipefinder.recipefinder.dto.models;

import com.recipefinder.recipefinder.models.PartOfTheDay;
import com.recipefinder.recipefinder.models.PlannedMeal;

import java.util.Date;

public class PlannedRecipeDto {
    private final Long recipeId;
    private final Long id;

    public PlannedRecipeDto(PlannedMeal plannedMeal) {
        this.name = plannedMeal.getRecipe().getTitle();
        this.recipeId = plannedMeal.getRecipe().getId();
        this.date = plannedMeal.getPlannedFor();
        this.id = plannedMeal.getId();
        this.partOfTheDay = plannedMeal.getPartOfTheDay();
    }

    private String name;
    private Date date;
    private PartOfTheDay partOfTheDay;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public PartOfTheDay getPartOfTheDay() {
        return partOfTheDay;
    }

    public void setPartOfTheDay(PartOfTheDay partOfTheDay) {
        this.partOfTheDay = partOfTheDay;
    }

    public Long getRecipeId() {
        return recipeId;
    }

    public Long getId() {
        return id;
    }
}
