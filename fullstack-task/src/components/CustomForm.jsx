import { useState } from "react"

const CustomForm = ({ addNote }) => {
    const [note, setNote] = useState();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        addNote({
            id: Date.now(),
            details: note
        });
        setNote("");
    }

    return (
        <>
            <form type="submit" onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    id={note}
                    value={note} //note.details
                    onInput={(e) => { setNote(e.target.value) }}
                    placeholder="Add note..."
                >
                </input>
                <button
                    type="submit"
                >Add</button>
            </form>
        </>
    )
}

export default CustomForm