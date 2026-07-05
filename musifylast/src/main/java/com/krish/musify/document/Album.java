package com.krish.musify.document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "albums")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Album {

    @Id
    private String id;

    private String name;

    private String desc;

    private String bgColor;

    private String image;
}