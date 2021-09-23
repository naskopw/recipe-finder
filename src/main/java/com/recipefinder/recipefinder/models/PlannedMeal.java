package com.recipefinder.recipefinder.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.recipefinder.recipefinder.models.authentication.User;

import javax.persistence.*;
import java.util.Date;

@Entity
public class PlannedMeal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @JsonIgnore
    @Temporal(TemporalType.DATE)
    private Date plannedFor;
    private PartOfTheDay partOfTheDay;

    @OneToOne
    private Recipe recipe;
    @OneToOne
    private User user;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getPlannedFor() {
        return plannedFor;
    }

    public void setPlannedFor(Date plannedFor) {
        this.plannedFor = plannedFor;
    }

    public PartOfTheDay getPartOfTheDay() {
        return partOfTheDay;
    }

    public void setPartOfTheDay(PartOfTheDay partOfTheDay) {
        this.partOfTheDay = partOfTheDay;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public PlannedMeal(Date date, PartOfTheDay partOfTheDay, Recipe recipe, User user) {
        this.plannedFor = date;
        this.partOfTheDay = partOfTheDay;
        this.recipe = recipe;
        this.user = user;
    }

    public PlannedMeal() {
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
