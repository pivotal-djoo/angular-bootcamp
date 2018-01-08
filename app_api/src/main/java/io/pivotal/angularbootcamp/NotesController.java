package io.pivotal.angularbootcamp;

import io.pivotal.angularbootcamp.models.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(maxAge = 3600)
@RestController
public class NotesController {

    @Autowired
    NotesRepository notesRepository;

    @PostMapping("/add")
    public ResponseEntity addNote(@RequestBody Note newNote) {
        System.out.print("New note received: " + newNote);

        notesRepository.save(newNote);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<Note>> getNotes() {
        return new ResponseEntity<>(notesRepository.findAll(), HttpStatus.OK);
    }
}
