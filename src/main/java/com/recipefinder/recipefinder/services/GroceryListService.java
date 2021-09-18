package com.recipefinder.recipefinder.services;

import com.recipefinder.recipefinder.dto.mappers.GroceryMapper;
import com.recipefinder.recipefinder.models.GroceryItem;
import com.recipefinder.recipefinder.dto.GroceryDto;
import com.recipefinder.recipefinder.repository.GroceryListRepository;
import com.recipefinder.recipefinder.repository.authentication.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GroceryListService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    GroceryListRepository groceryListRepository;


    public List<GroceryDto> getItems(Long userId) {
        var user = userRepository.findById(userId).orElseThrow();
        var result = new ArrayList<GroceryDto>();
        groceryListRepository.findAllByUser(user).forEach(i -> result.add(
                GroceryMapper.toGroceryDto(i)));
        return result;
    }

    public void addItem(Long userId, GroceryDto groceryDto) {
        var user = userRepository.findById(userId).orElseThrow();
        groceryListRepository.save(new GroceryItem(
                null,
                groceryDto.getTitle(),
                groceryDto.getDesc(),
                groceryDto.getQuantity(),
                user));
    }

    public void deleteItem(Long groceryId, Long userId) {
        var grocery = groceryListRepository.findById(groceryId).orElseThrow();
        if (grocery.getUser().getId().equals(userId))
            groceryListRepository.delete(grocery);
    }


}
