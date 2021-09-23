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

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/favorite")
public class FavoriteController {
    @Autowired
    private final FavoriteService favoriteService;

    @GetMapping("/")
    public ResponseEntity<List<CookbookDto>> getItems(@AuthenticationPrincipal UserDetailsImpl user) {

        return ResponseEntity.ok().body(favoriteService.getCookbooks(user.getId()));
    }

    @PostMapping("/")
    public ResponseEntity<String> addItem(@AuthenticationPrincipal UserDetailsImpl user,
                                          @RequestBody Map<String, String> args) {
        favoriteService.createCookbook(args.get("title"), user.getId());
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
}
