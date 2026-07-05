package com.krish.musify.document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "songs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Song {

    @Id
    private String id;

    private String title;

    private String artist;

    private String albumId;

    private String image;

    private String audio;

    private String duration;
}