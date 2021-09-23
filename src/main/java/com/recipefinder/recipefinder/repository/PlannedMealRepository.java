package com.recipefinder.recipefinder.repository;

import com.recipefinder.recipefinder.models.PlannedMeal;
import com.recipefinder.recipefinder.models.Recipe;
import com.recipefinder.recipefinder.models.authentication.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface PlannedMealRepository extends JpaRepository<PlannedMeal, Long> {
    PlannedMeal findByRecipe(Recipe recipe);

    PlannedMeal findAllByUser(User user);

    List<PlannedMeal> findAllByPlannedFor(Date date);
}
