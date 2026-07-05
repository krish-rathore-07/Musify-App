package com.krish.musify.service;

import com.krish.musify.document.Song;
import com.krish.musify.repository.SongRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class SongService {

    private final SongRepository songRepository;

    public Song addSong(
            String title,
            String artist,
            String albumId,
            MultipartFile imageFile,
            MultipartFile audioFile
    ) {

        try {

            String imageDir = System.getProperty("user.dir") + "/uploads/images/";
            String audioDir = System.getProperty("user.dir") + "/uploads/audio/";

            File imageFolder = new File(imageDir);
            File audioFolder = new File(audioDir);

            if (!imageFolder.exists()) {
                imageFolder.mkdirs();
            }

            if (!audioFolder.exists()) {
                audioFolder.mkdirs();
            }

            String imageName = UUID.randomUUID() + "_" + imageFile.getOriginalFilename();

            String audioName = UUID.randomUUID() + "_" + audioFile.getOriginalFilename();

            imageFile.transferTo(new File(imageDir + imageName));

            audioFile.transferTo(new File(audioDir + audioName));

            Song song = new Song();

            song.setTitle(title);
            song.setArtist(artist);
            song.setAlbumId(albumId);
            song.setImage(imageName);
            song.setAudio(audioName);
            song.setDuration("0:00");

            return songRepository.save(song);

        } catch (IOException e) {

            throw new RuntimeException("Failed to upload song");
        }
    }

    public List<Song> getAllSongs() {

        return songRepository.findAll();
    }

    public void deleteSong(String id) {

        songRepository.deleteById(id);
    }
}