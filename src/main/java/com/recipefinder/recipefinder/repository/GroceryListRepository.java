package com.recipefinder.recipefinder.repository;

import com.recipefinder.recipefinder.models.GroceryItem;
import com.recipefinder.recipefinder.models.authentication.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GroceryListRepository extends JpaRepository<GroceryItem, Long> {
    List<GroceryItem> findAllByUser(User user);
}
