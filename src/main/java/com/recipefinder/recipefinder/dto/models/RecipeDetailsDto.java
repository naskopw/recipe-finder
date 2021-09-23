package com.recipefinder.recipefinder.dto.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@Getter
@Setter
public class RecipeDetailsDto {
    private String title;
    private String description;
    private String time;
    private List<String> ingredients;
    private List<String> steps;
    private List<String> images;
    private int servings;
    private long id;
}
