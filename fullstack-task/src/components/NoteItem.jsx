import { useState } from "react";

const NoteItem = ({ note, deleteNote, updateNote }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedNote, setUpdatedNote] = useState(note);

    const handleDelete = () => {
        deleteNote(note.id);
    }

    const handleUpdate = (id, updatedNote) => {
        updateNote(id, updatedNote);
        setIsEditing(false);
    }

    return (
        <li>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        id={note.id}
                        value={updatedNote.details} 
                        onInput={(e) => { setUpdatedNote({...updatedNote, details: e.target.value}) }}
                        placeholder="Update note..."
                    >
                    </input>
                    <button
                        style={{ background:"green"}}
                        onClick={handleUpdate(note.id, updatedNote)}
                    >Save</button>
                </div>

            ) : (
                <div>
                    <p>{updatedNote.details}</p>
                    <button
                        style={{ background: "yellow" }}
                        onClick={() => setIsEditing(true)}
                    >
                        Update
                    </button>
                    <button
                        style={{ background: "red" }}
                        onClick={handleDelete}
                    >Delete</button>
                </div>
            )}
        </li>
    )
}

export default NoteItem