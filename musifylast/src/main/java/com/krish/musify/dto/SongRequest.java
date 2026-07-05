package com.krish.musify.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SongRequest {

    private String title;

    private String artist;

    private String albumId;

    private MultipartFile imageFile;

    private MultipartFile audioFile;
}