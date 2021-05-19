package com.recipefinder.recipefinder.repository;

import com.recipefinder.recipefinder.models.RecipeImage;
import org.springframework.data.repository.CrudRepository;

public interface ImageRepository extends CrudRepository<RecipeImage, Long> {
}
