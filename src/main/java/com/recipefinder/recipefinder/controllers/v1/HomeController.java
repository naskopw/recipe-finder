package com.recipefinder.recipefinder.controllers.v1;

import com.recipefinder.recipefinder.models.Recipe;
import com.recipefinder.recipefinder.services.RecipeMockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @Autowired
    RecipeMockService recipeMockService;


    @RequestMapping("/api")
    public Recipe[] getTrending() {
        return recipeMockService.trending();
    }


    @RequestMapping("/api/details")
    public Recipe getRecipe(@RequestParam int id) {
        return recipeMockService.allRecipes()[id];
    }
}
