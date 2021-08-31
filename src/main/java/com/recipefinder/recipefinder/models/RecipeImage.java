package com.recipefinder.recipefinder.models;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
public class RecipeImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Recipe recipe;
    private String src;

    public RecipeImage(String src, Recipe recipe) {
        this.recipe = recipe;
        this.src = src;
    }
}
