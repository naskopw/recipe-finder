package com.recipefinder.recipefinder.models.requests;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class CookbookCreateRequest {

    private String title;
    private String image;


}
