package com.krish.musify.service;

import com.krish.musify.document.Album;
import com.krish.musify.repository.AlbumRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AlbumService {

    private final AlbumRepository albumRepository;

    public Album addAlbum(
            String name,
            String desc,
            String bgColor,
            MultipartFile imageFile
    ) {

        try {

            String uploadDir = System.getProperty("user.dir") + "/uploads/images/";

            File directory = new File(uploadDir);

            if (!directory.exists()) {
                directory.mkdirs();
            }

            String fileName = UUID.randomUUID() + "_" + imageFile.getOriginalFilename();

            String filePath = uploadDir + fileName;

            imageFile.transferTo(new File(filePath));

            Album album = new Album();

            album.setName(name);
            album.setDesc(desc);
            album.setBgColor(bgColor);
            album.setImage(fileName);

            return albumRepository.save(album);

        } catch (IOException e) {

            throw new RuntimeException("Failed to upload image");
        }
    }

    public List<Album> getAllAlbums() {

        return albumRepository.findAll();
    }

    public void deleteAlbum(String id) {

        albumRepository.deleteById(id);
    }
}