package io.pivotal.angularbootcamp;

import io.pivotal.angularbootcamp.models.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesRepository extends JpaRepository<Note, Integer> {

}
