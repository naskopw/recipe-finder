package com.recipefinder.recipefinder.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String text;
    @JsonIgnore
    @ManyToOne
    private Recipe recipe;

    public Ingredient() {
    }

    public Ingredient(String text, Recipe recipe) {
        this.text = text;
        this.recipe = recipe;
    }

    public String getText() {
        return text;
    }

    public Ingredient setText(String text) {
        this.text = text;
        return this;
    }
}
