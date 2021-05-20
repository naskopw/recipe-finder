package com.recipefinder.recipefinder.dto.models;

import java.util.List;

public class RecipeDetailsDto {
    public String getTitle() {
        return title;
    }

    public RecipeDetailsDto setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getTime() {
        return time;
    }

    public RecipeDetailsDto setTime(String time) {
        this.time = time;
        return this;
    }

    public int getServings() {
        return servings;
    }

    public RecipeDetailsDto setServings(int servings) {
        this.servings = servings;
        return this;
    }

    public RecipeDetailsDto() {
    }

    private String title;
    private String description;
    private String time;
    private List<String> ingredients;
    private List<String> steps;
    private List<String> images;
    private int servings;
    private long id;

    public long getId() {
        return id;
    }

    public RecipeDetailsDto setId(long id) {
        this.id = id;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public RecipeDetailsDto setDescription(String description) {
        this.description = description;
        return this;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public RecipeDetailsDto setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
        return this;
    }

    public List<String> getSteps() {
        return steps;
    }

    public RecipeDetailsDto setSteps(List<String> steps) {
        this.steps = steps;
        return this;
    }

    public List<String> getImages() {
        return images;
    }

    public RecipeDetailsDto setImages(List<String> images) {
        this.images = images;
        return this;
    }
}
