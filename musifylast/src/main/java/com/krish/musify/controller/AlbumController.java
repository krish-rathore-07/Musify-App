package com.krish.musify.controller;

import com.krish.musify.document.Album;
import com.krish.musify.service.AlbumService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/albums")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AlbumController {

    private final AlbumService albumService;

    @PostMapping
    public ResponseEntity<Album> addAlbum(
            @RequestParam("name") String name,
            @RequestParam("desc") String desc,
            @RequestParam("bgColor") String bgColor,
            @RequestParam("imageFile") MultipartFile imageFile
    ) {

        Album album = albumService.addAlbum(name, desc, bgColor, imageFile);

        return ResponseEntity.status(HttpStatus.CREATED).body(album);
    }

    @GetMapping
    public ResponseEntity<List<Album>> getAllAlbums() {

        return ResponseEntity.ok(albumService.getAllAlbums());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAlbum(@PathVariable String id) {

        albumService.deleteAlbum(id);

        return ResponseEntity.ok("Album deleted successfully");
    }
}