package com.krish.musify.repository;

import com.krish.musify.document.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {

    User findByEmail(String email);

    boolean existsByEmail(String email);
}