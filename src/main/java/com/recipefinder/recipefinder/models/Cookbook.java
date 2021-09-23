package com.recipefinder.recipefinder.models;

import com.recipefinder.recipefinder.models.authentication.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Cookbook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String image;
    @ManyToOne
    private User user;
    @OneToMany
    private List<Recipe> recipes;
}
