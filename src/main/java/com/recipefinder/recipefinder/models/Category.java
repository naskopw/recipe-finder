package com.recipefinder.recipefinder.models;

import javax.persistence.*;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String image;
    public static final Path BASE_CATEGORY_PATH = Path.of("/img/products");

    @ManyToMany(cascade = CascadeType.MERGE)
    @JoinTable(name = "recipe_categories",
            joinColumns = @JoinColumn(name = "category_id"),
            inverseJoinColumns = @JoinColumn(name = "recipe_id"))
    private final List<Recipe> recipeList = new ArrayList<>();

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Category category = (Category) o;
        return name.equals(category.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }
}
