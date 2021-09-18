package com.recipefinder.recipefinder.dto.mappers;

import com.recipefinder.recipefinder.dto.GroceryDto;
import com.recipefinder.recipefinder.models.GroceryItem;

public class GroceryMapper {
    public static GroceryDto toGroceryDto(GroceryItem groceryItem) {
        return new GroceryDto(
                groceryItem.getId(),
                groceryItem.getTitle(),
                groceryItem.getDescription(),
                groceryItem.getQuantity());
    }
}
