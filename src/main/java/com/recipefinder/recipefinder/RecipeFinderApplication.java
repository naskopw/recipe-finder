package com.recipefinder.recipefinder;

import com.recipefinder.recipefinder.repository.RecipeRepository;
import com.recipefinder.recipefinder.services.DBSeedService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class RecipeFinderApplication {

    public static void main(String[] args) {
        SpringApplication.run(RecipeFinderApplication.class, args);
    }

    @Autowired
    private DBSeedService dbSeedService;
    private final Logger logger = LoggerFactory.getLogger(RecipeFinderApplication.class);
    @Autowired
    private RecipeRepository recipeRepository;

    @EventListener
    void seedDatabase(ContextRefreshedEvent event) {
        if (recipeRepository.count() == 0) {
            logger.info("Seeding database!");
            dbSeedService.populateDB();
            logger.info("Database seeded!");
        }
    }
}

