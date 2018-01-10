package io.pivotal.angularbootcamp.models;

import lombok.*;

import javax.persistence.*;

@Value
@NoArgsConstructor(force = true)
@AllArgsConstructor
@Builder
@Entity
@Table(name = "notes")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;
    String content;
}
