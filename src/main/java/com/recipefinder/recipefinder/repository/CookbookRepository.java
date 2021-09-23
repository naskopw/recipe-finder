package com.recipefinder.recipefinder.repository;

import com.recipefinder.recipefinder.models.Cookbook;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CookbookRepository extends CrudRepository<Cookbook, Long> {
    List<Cookbook> findByUserId(Long userId);
}
