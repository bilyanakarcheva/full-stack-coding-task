import { useState } from 'react'
import './App.css'
import CustomForm from './components/CustomForm.jsx'
import NotesList from './components/NotesList.jsx';

function App() {

  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes(currNotes => [...currNotes, note])
  }

  const deleteNote = (id) => {
    setNotes(notes => notes.filter(note => note.id !== id));
  }

  const updateNote = (id, updatedNote) => {
    setNotes(currNotes => currNotes.map(note => note.id === id ? updatedNote : note));
  }

  return (
    <>
      <CustomForm addNote={addNote} />
      {notes &&
        <NotesList
          notes={notes}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      }
    </>
  )
}

export default App
