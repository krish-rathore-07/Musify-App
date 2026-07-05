package com.krish.musify.repository;

import com.krish.musify.document.Song;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SongRepository extends MongoRepository<Song, String> {
}