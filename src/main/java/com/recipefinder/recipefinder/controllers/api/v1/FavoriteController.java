package com.recipefinder.recipefinder.controllers.api.v1;

import com.recipefinder.recipefinder.dto.models.CookbookDto;
import com.recipefinder.recipefinder.models.Cookbook;
import com.recipefinder.recipefinder.models.requests.CookbookCreateRequest;
import com.recipefinder.recipefinder.security.services.UserDetailsImpl;
import com.recipefinder.recipefinder.services.FavoriteService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/favorite")
public class FavoriteController {
    @Autowired
    private final FavoriteService favoriteService;

    @GetMapping("/{id}")
    public ResponseEntity<CookbookDto> getItems(@AuthenticationPrincipal UserDetailsImpl user,
                                                @PathVariable Long id) {
        var categories = favoriteService.getCookbooks(user.getId())
                .stream().filter(c -> c.getId().equals(id)).collect(Collectors.toList());
        if (categories.size() > 0) {

            return ResponseEntity.ok().body(categories.get(0));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/")
    public ResponseEntity<List<CookbookDto>> getItems(@AuthenticationPrincipal UserDetailsImpl user) {
        return ResponseEntity.ok().body(favoriteService.getCookbooks(user.getId()));
    }

    @PostMapping("/")
    public ResponseEntity<String> addItem(@AuthenticationPrincipal UserDetailsImpl user,
                                          @RequestBody Map<String, String> args) {
        favoriteService.createCookbook(args.get("title"), user.getId(),
                null, args.get("image"));
        return ResponseEntity.ok().body("Successful");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> editItem(@AuthenticationPrincipal UserDetailsImpl user,
                                           @PathVariable Long id,
                                           @RequestBody CookbookCreateRequest request) {
        favoriteService.updateCookbook(id,
                request,
                user.getId());
        return ResponseEntity.ok().body("Successful");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteItem(@AuthenticationPrincipal UserDetailsImpl user,
                                             @PathVariable Long id) {
        favoriteService.deleteCookbook(id,
                user.getId());
        return ResponseEntity.ok().body("Successful");
    }

    @PostMapping("/{id}/recipe/{recipeId}")
    public ResponseEntity<String> addRecipe(@AuthenticationPrincipal UserDetailsImpl user,
                                            @PathVariable Long id,
                                            @PathVariable Long recipeId) {
        favoriteService.addRecipe(recipeId, id, user.getId());
        return ResponseEntity.ok().body("Successful");
    }

    @DeleteMapping("/{id}/recipe/{recipeId}")
    public ResponseEntity<String> deleteRecipe(@AuthenticationPrincipal UserDetailsImpl user,
                                               @PathVariable Long id,
                                               @PathVariable Long recipeId) {
        favoriteService.deleteRecipe(recipeId, id, user.getId());
        return ResponseEntity.ok().body("Successful");
    }
}
