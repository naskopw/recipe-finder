package com.recipefinder.recipefinder.dto.models;

public class RecipeOverviewDto {
    public String getTitle() {
        return title;
    }

    public RecipeOverviewDto setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getTime() {
        return time;
    }

    public RecipeOverviewDto setTime(String time) {
        this.time = time;
        return this;
    }

    public int getServings() {
        return servings;
    }

    public RecipeOverviewDto setServings(int servings) {
        this.servings = servings;
        return this;
    }

    public RecipeOverviewDto() {
    }

    private String title;
    private String time;
    private int servings;
    private long id;

    public long getId() {
        return id;
    }

    public RecipeOverviewDto setId(long id) {
        this.id = id;
        return this;
    }
}
