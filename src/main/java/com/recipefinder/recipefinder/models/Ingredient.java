package com.recipefinder.recipefinder.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.nio.charset.StandardCharsets;

@Entity
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private byte[] text;
    @JsonIgnore
    @ManyToOne
    private Recipe recipe;

    public Ingredient() {
    }

    public Ingredient(String text, Recipe recipe) {
        this.text = text.getBytes(StandardCharsets.UTF_8);
        this.recipe = recipe;
    }

    public String getText() {
        return new String(text, StandardCharsets.UTF_8);
    }

    public Ingredient setText(String text) {
        this.text = text.getBytes(StandardCharsets.UTF_8);
        return this;
    }
}
