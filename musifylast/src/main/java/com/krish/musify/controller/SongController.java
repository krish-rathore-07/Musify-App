package com.krish.musify.controller;

import com.krish.musify.document.Song;
import com.krish.musify.service.SongService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/songs")
@RequiredArgsConstructor
@CrossOrigin("*")
public class SongController {

    private final SongService songService;

    @PostMapping
    public ResponseEntity<Song> addSong(
            @RequestParam("title") String title,
            @RequestParam("artist") String artist,
            @RequestParam("albumId") String albumId,
            @RequestParam("imageFile") MultipartFile imageFile,
            @RequestParam("audioFile") MultipartFile audioFile
    ) {

        Song song = songService.addSong(
                title,
                artist,
                albumId,
                imageFile,
                audioFile
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(song);
    }

    @GetMapping
    public ResponseEntity<List<Song>> getAllSongs() {

        return ResponseEntity.ok(songService.getAllSongs());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSong(@PathVariable String id) {

        songService.deleteSong(id);

        return ResponseEntity.ok("Song deleted successfully");
    }
}