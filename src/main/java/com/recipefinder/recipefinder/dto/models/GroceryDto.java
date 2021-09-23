package com.recipefinder.recipefinder.dto.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class GroceryDto {
    private Long id;
    private String title;
    private String desc = "";
    private int quantity = 1;
}
