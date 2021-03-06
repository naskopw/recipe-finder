package com.recipefinder.recipefinder.dto.models;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class CategoryDto {
    private String name;
    @JsonProperty("recipes")
    private List<RecipeOverviewDto> recipeOverviewDtoList;
    private long id;
    private String image;

    public String getName() {
        return name;
    }

    public CategoryDto setName(String name) {
        this.name = name;
        return this;
    }

    public CategoryDto() {
    }

    public long getId() {
        return id;
    }

    public CategoryDto setId(long id) {
        this.id = id;
        return this;
    }

    public List<RecipeOverviewDto> getRecipeOverviewDtoList() {
        return recipeOverviewDtoList;
    }

    public CategoryDto setRecipeOverviewDtoList(List<RecipeOverviewDto> recipeOverviewDtoList) {
        this.recipeOverviewDtoList = recipeOverviewDtoList;
        return this;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
