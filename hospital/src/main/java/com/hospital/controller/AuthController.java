package com.hospital.controller;

import com.hospital.model.User;
import com.hospital.repository.UserRepository;
import com.hospital.service.JwtService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins="http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository repo;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return repo.save(user);
    }

    @PostMapping("/login")
public String login(@RequestBody User user) {

    Optional<User> dbUser = repo.findByUsername(user.getUsername());

    if (dbUser == null) {
        throw new RuntimeException("User not found");
    }

    if (!dbUser.isPresent()) {
        throw new RuntimeException("User not found");
    }

    if (!dbUser.get().getPassword().equals(user.getPassword())) {
        throw new RuntimeException("Invalid password");
    }

    return jwtService.generateToken(user.getUsername());
}
}