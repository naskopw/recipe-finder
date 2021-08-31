package com.recipefinder.recipefinder.repository;

import com.recipefinder.recipefinder.models.Category;
import org.springframework.data.repository.CrudRepository;


import java.util.Set;

public interface CategoryRepository extends CrudRepository<Category, Long> {
    Set<Category> findByNameStartsWith(String name);
}
