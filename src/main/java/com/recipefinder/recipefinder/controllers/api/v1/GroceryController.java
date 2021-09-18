package com.recipefinder.recipefinder.controllers.api.v1;

import com.recipefinder.recipefinder.dto.GroceryDto;
import com.recipefinder.recipefinder.security.services.UserDetailsImpl;
import com.recipefinder.recipefinder.services.GroceryListService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/grocery")
public class GroceryController {
    private final GroceryListService groceryListService;

    @GetMapping("/")
    public ResponseEntity<List<GroceryDto>> getItems(@AuthenticationPrincipal UserDetailsImpl user) {
        return ResponseEntity.ok().body(groceryListService.getItems(user.getId()));
    }

    @PostMapping("/")
    public ResponseEntity<String> addItem(@AuthenticationPrincipal UserDetailsImpl user,
                                          @RequestBody GroceryDto groceryDto) {
        groceryListService.addItem(user.getId(), groceryDto);
        return ResponseEntity.ok().body("Successful");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteItem(@PathVariable Long id,
                                             @AuthenticationPrincipal UserDetailsImpl user) {
        groceryListService.deleteItem(id, user.getId());
        return ResponseEntity.ok().body("Successful");
    }
}
