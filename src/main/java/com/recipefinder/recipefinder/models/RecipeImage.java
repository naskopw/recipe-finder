package com.recipefinder.recipefinder.models;

import javax.persistence.*;

@Entity
public class RecipeImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    public RecipeImage() {
    }

    public Recipe getRecipe() {
        return recipe;
    }

    @ManyToOne
    private Recipe recipe;

    public String getSrc() {
        return src;
    }

    String src;

    public RecipeImage(String src, Recipe recipe) {
        this.recipe = recipe;
        this.src = src;
    }
}
