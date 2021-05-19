package com.recipefinder.recipefinder.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class InstructionStep {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Lob
    private String text;

    public InstructionStep() {
    }

    @JsonIgnore
    @ManyToOne
    private Recipe recipe;

    public InstructionStep(String text, Recipe recipe) {
        this.text = text;
        this.recipe = recipe;
    }
}
