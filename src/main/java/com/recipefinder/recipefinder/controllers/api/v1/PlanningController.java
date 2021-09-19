package com.recipefinder.recipefinder.controllers.api.v1;

import com.recipefinder.recipefinder.dto.models.PlannedRecipeDto;
import com.recipefinder.recipefinder.models.requests.PlanningRequest;
import com.recipefinder.recipefinder.security.services.UserDetailsImpl;
import com.recipefinder.recipefinder.services.PlannedMealService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Objects;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/planning")
public class PlanningController {
    private final PlannedMealService plannedMealService;

    @GetMapping("/date")
    public ResponseEntity<List<PlannedRecipeDto>> getPlansByDate(@RequestParam(value = "for", required = false)
                                                                 @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
                                                                         Date date) {
        return ResponseEntity.ok().body(plannedMealService.getForDate(Objects.requireNonNullElseGet(date, Date::new)));
    }

    @GetMapping("/")
    public ResponseEntity<List<PlannedRecipeDto>> getPlannedMeals() {
        return ResponseEntity.ok().body(plannedMealService.getAll());
    }

    @PostMapping("/{recipeId}")
    public ResponseEntity<String> postPlan(@PathVariable Long recipeId,
                                           @RequestBody
                                                   PlanningRequest planningRequest,
                                           @AuthenticationPrincipal UserDetailsImpl user) {
        plannedMealService.planMeal(user.getId(), recipeId,
                planningRequest.getPartOfTheDay(), planningRequest.getDate());
        return ResponseEntity.ok("Successful");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePlan(@PathVariable Long id,
                                             @AuthenticationPrincipal UserDetailsImpl user) {
        plannedMealService.deleteMeal(id, user.getId());
        return ResponseEntity.ok("Successful");
    }
}
