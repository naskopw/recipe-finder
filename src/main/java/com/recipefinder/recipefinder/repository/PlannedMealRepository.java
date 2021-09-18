package com.recipefinder.recipefinder.repository;

import com.recipefinder.recipefinder.models.PlannedMeal;
import com.recipefinder.recipefinder.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface PlannedMealRepository extends JpaRepository<PlannedMeal, Long> {
    PlannedMeal findByRecipe(Recipe recipe);

    List<PlannedMeal> findAllByPlannedFor(Date date);
}
