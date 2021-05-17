package com.recipefinder.recipefinder.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.recipefinder.recipefinder.models.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;

@Service
public class RecipeMockService {

    public static final String MOCK_JSON_LOCATION = "src/main/java/com/recipefinder/recipefinder/data/recipes.json";
    public static final int TRENDING_SIZE = 10;


    public Recipe[] allRecipes() {

        File file = new File(MOCK_JSON_LOCATION);
        try {

            ObjectMapper objectMapper = new ObjectMapper();
            var recipes = objectMapper.readValue(file, Recipe[].class);
            for (int i = 0; i < recipes.length; i++) {
                recipes[i].setIndex(i);
            }
            return recipes;
        } catch (IOException e) {
            e.printStackTrace();
            return new Recipe[0];
        }
    }

    public Recipe[] trending() {
        Random r = new Random();
        var recipes = allRecipes();
        int startIndex = r.nextInt(recipes.length - TRENDING_SIZE);
        return Arrays.copyOfRange(recipes, startIndex, startIndex + TRENDING_SIZE);
    }
}
