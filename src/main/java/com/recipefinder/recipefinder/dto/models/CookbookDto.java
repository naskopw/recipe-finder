package com.recipefinder.recipefinder.dto.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CookbookDto {
    private Long id;
    private String title;
    private String image;
    private List<RecipeOverviewDto> recipes;
}
