package com.recipefinder.recipefinder.services;

import com.recipefinder.recipefinder.dto.mappers.CookbookMapper;
import com.recipefinder.recipefinder.dto.models.CookbookDto;
import com.recipefinder.recipefinder.models.Cookbook;
import com.recipefinder.recipefinder.models.requests.CookbookCreateRequest;
import com.recipefinder.recipefinder.repository.CookbookRepository;
import com.recipefinder.recipefinder.repository.authentication.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FavoriteService {
    private final CookbookRepository cookbookRepository;
    private final UserRepository userRepository;

    public FavoriteService(CookbookRepository cookbookRepository, UserRepository userRepository) {
        this.cookbookRepository = cookbookRepository;
        this.userRepository = userRepository;
    }

    public List<CookbookDto> getCookbooks(Long userId) {
        return cookbookRepository.findByUserId(userId)
                .stream().map(CookbookMapper::toCookbookDto)
                .collect(Collectors.toList());

    }

    public void updateCookbook(Long id, CookbookCreateRequest request, Long userId) {
        var cookbooks = cookbookRepository.findByUserId(userId)
                .stream().filter(c -> c.getId().equals(id))
                .collect(Collectors.toList());
        var cookbook = cookbooks.size() > 0 ? cookbooks.get(0) : null;
        if (cookbook != null) {
            if (!request.getTitle().isEmpty() && !request.getTitle().isBlank())
                cookbook.setTitle(request.getTitle());
            if (!request.getImage().isEmpty() && !request.getImage().isBlank())
                cookbook.setImage(request.getImage());
            cookbookRepository.save(cookbook);
        } else {
            createCookbook(request.getTitle(), userId, id, request.getImage());
        }
    }

    public void createCookbook(String title, Long userId) {
        createCookbook(title, userId, null, "");
    }

    public void createCookbook(String title, Long userId, Long id, String image) {
        var user = userRepository.findById(userId).orElseThrow();
        var cookbook = new Cookbook(id, title, image, user, new ArrayList<>());
        cookbookRepository.save(cookbook);
    }

    public void deleteCookbook(Long id, Long userId) {
        try {
            var cookbook = cookbookRepository.findByUserId(userId)
                    .stream().filter(c -> c.getId().equals(id))
                    .collect(Collectors.toList()).get(0);
            if (cookbook.getUser().getId().equals(userId))
                cookbookRepository.delete(cookbook);
        } catch (IndexOutOfBoundsException ignored) {

        }
    }


}
