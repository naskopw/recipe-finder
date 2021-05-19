package com.recipefinder.recipefinder.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL)
    private List<RecipeImage> recipeImages = new ArrayList<>();
    @Lob
    private String description;
    private String time;
    private int servings;
    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL)
    private List<Ingredient> ingredients = new ArrayList<>();
    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL)
    private List<InstructionStep> instructionSteps = new ArrayList<>();

    @ManyToMany(mappedBy = "recipeList")
    private List<Category> categories;

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public List<InstructionStep> getInstructionSteps() {
        return instructionSteps;
    }

    public long getId() {
        return id;
    }

    public Recipe setId(long id) {
        this.id = id;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public Recipe setTitle(String title) {
        this.title = title;
        return this;
    }

    public List<RecipeImage> getRecipeImages() {
        return recipeImages;
    }

    public void setRecipeImages(List<RecipeImage> recipeImages) {
        this.recipeImages = recipeImages;
    }

    public String getDescription() {
        return description;
    }

    public Recipe setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getTime() {
        return time;
    }

    public Recipe setTime(String time) {
        this.time = time;
        return this;
    }

    public int getServings() {
        return servings;
    }

    public Recipe setServings(int servings) {
        this.servings = servings;
        return this;
    }


    public Recipe setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
        return this;
    }

    public Recipe setInstructionSteps(List<InstructionStep> instructionSteps) {
        this.instructionSteps = instructionSteps;
        return this;
    }

    public List<Category> getCategories() {
        return categories;
    }

    public Recipe setCategories(List<Category> categories) {
        this.categories = categories;
        return this;
    }
}
