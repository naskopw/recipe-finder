package com.recipefinder.recipefinder.dto.models;

import com.recipefinder.recipefinder.models.PartOfTheDay;
import com.recipefinder.recipefinder.models.Recipe;

import java.util.Date;

public class PlannedRecipeDto {
    private final Long id;

    public PlannedRecipeDto(Recipe recipe, Date date, PartOfTheDay partOfTheDay) {
        this.name = recipe.getTitle();
        this.id = recipe.getId();
        this.date = date;
        this.partOfTheDay = partOfTheDay;
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

    public Long getId() {
        return id;
    }
}
