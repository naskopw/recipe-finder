package com.recipefinder.recipefinder;

import com.recipefinder.recipefinder.repository.RecipeRepository;
import com.recipefinder.recipefinder.services.DBSeedService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
@Slf4j
@RequiredArgsConstructor
public class RecipeFinderApplication {

    public static void main(String[] args) {
        SpringApplication.run(RecipeFinderApplication.class, args);
    }

    private final DBSeedService dbSeedService;
    private final RecipeRepository recipeRepository;

    @EventListener
    void seedDatabase(ContextRefreshedEvent event) {
        if (recipeRepository.count() == 0) {
            log.info("Seeding database!");
            dbSeedService.populateDB();
            log.info("Database seeded!");
        }
    }
}

