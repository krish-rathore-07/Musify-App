package com.krish.musify.controller;

import com.krish.musify.document.User;
import com.krish.musify.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {

    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {

        User savedUser = userService.register(user);

        return ResponseEntity.ok(savedUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {

        User loggedInUser = userService.login(user.getEmail(), user.getPassword());

        if (loggedInUser != null) {
            return ResponseEntity.ok(loggedInUser);
        }

        return ResponseEntity.badRequest().body("Invalid Email or Password");
    }
}