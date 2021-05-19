package com.recipefinder.recipefinder.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String image;

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "recipe_categories",
            joinColumns = @JoinColumn(name = "category_id"),
            inverseJoinColumns = @JoinColumn(name = "recipe_id"))
    private List<Recipe> recipeList = new ArrayList<>();

    public Category(String name, String image) {
        this.name = name;
        this.image = image;
    }

    public Category() {
    }

    public String getImage() {
        return image;
    }

    public String getName() {
        return name;
    }

    public List<Recipe> getRecipeList() {
        return recipeList;
    }

    public long getId() {
        return id;
    }
}
