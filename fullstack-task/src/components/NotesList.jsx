import { useState } from "react"
import NoteItem from "./NoteItem"

const NotesList = ({ notes, deleteNote, updateNote }) => {

    return (
        <ul>
            {notes.map(note =>
                <NoteItem
                    key={note.id}
                    note={note}
                    deleteNote={deleteNote}
                    updateNote={updateNote}
                />
            )}
        </ul>
    )
}

export default NotesList