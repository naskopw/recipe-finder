package com.recipefinder.recipefinder.repository;

import com.recipefinder.recipefinder.models.Recipe;
import org.springframework.data.repository.CrudRepository;

public interface RecipeRepository extends CrudRepository<Recipe, Long> {
}
