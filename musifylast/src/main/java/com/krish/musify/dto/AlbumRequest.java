package com.krish.musify.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AlbumRequest {

    private String name;

    private String desc;

    private String bgColor;

    private MultipartFile imageFile;
}