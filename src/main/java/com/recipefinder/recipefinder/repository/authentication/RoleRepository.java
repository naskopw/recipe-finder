package com.recipefinder.recipefinder.repository.authentication;

import java.util.Optional;

import com.recipefinder.recipefinder.models.authentication.ERole;
import com.recipefinder.recipefinder.models.authentication.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}