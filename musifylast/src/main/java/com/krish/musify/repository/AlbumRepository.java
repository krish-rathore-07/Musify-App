package com.krish.musify.repository;

import com.krish.musify.document.Album;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AlbumRepository extends MongoRepository<Album, String> {
}