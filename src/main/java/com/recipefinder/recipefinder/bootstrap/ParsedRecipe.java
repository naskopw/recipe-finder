package com.recipefinder.recipefinder.bootstrap;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class ParsedRecipe {
    private String title;
    private List<String> images;
    @JsonProperty("desc")
    private String description;
    private String time;
    private int servings;

    public String getTitle() {
        return title;
    }

    public ParsedRecipe setTitle(String title) {
        this.title = title;
        return this;
    }

    public List<String> getImages() {
        return images;
    }

    public ParsedRecipe setImages(List<String> images) {
        this.images = images;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public ParsedRecipe setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getTime() {
        return time;
    }

    public ParsedRecipe setTime(String time) {
        this.time = time;
        return this;
    }

    public int getServings() {
        return servings;
    }

    public ParsedRecipe setServings(int servings) {
        this.servings = servings;
        return this;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public ParsedRecipe setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
        return this;
    }

    public List<String> getInstructionSteps() {
        return instructionSteps;
    }

    public ParsedRecipe setInstructionSteps(List<String> instructionSteps) {
        this.instructionSteps = instructionSteps;
        return this;
    }

    private List<String> ingredients;
    @JsonProperty("steps")
    private List<String> instructionSteps;
    @JsonProperty("products")
    private List<String> productNames;

    public List<String> getProductNames() {
        return productNames;
    }

    public ParsedRecipe setProductNames(List<String> productNames) {
        this.productNames = productNames;
        return this;
    }
}
