package io.pivotal.angularbootcamp;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.pivotal.angularbootcamp.models.Note;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.List;

import static java.util.Arrays.asList;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Matchers.contains;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class NotesControllerTest {

    @Mock
    NotesRepository notesRepository;

    @Captor
    ArgumentCaptor<Note> argCaptor;

    @InjectMocks
    NotesController subject;

    private MockMvc mvc;

    @Before
    public void setup() {
        mvc = MockMvcBuilders
            .standaloneSetup(subject)
            .build();
    }

    @Test
    public void addNote() throws Exception {
        mvc.perform(post("/add")
            .contentType(MediaType.APPLICATION_JSON)
            .content(asJsonString(Note.builder().content("new note!").build())))
            .andExpect(status().isCreated());

        verify(notesRepository, times(1)).save(argCaptor.capture());
        assertThat(argCaptor.getValue().getContent()).isEqualTo("new note!");
    }

    @Test
    public void getAllNotes() throws Exception {
        List<Note> notes = asList(
            Note.builder().content("first note").build(),
            Note.builder().content("second note").build()
        );

        when(notesRepository.findAll()).thenReturn(notes);

        mvc.perform(get("/"))
            .andExpect(status().isOk())
            .andExpect(content().json(asJsonString(notes)));
    }

    @Test
    public void deleteAllNotes() throws Exception {
        mvc.perform(delete("/all"))
            .andExpect(status().isOk());

        verify(notesRepository, times(1)).deleteAll();
    }

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
