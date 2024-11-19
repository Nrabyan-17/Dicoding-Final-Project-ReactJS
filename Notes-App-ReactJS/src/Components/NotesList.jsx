import Note from "./Note";
import Addnote from "./Addnote";

const NotesList = ( { notes, addNote, deleteNote } ) => {

    return (
        <>
            <div className="notes-list-container">
                { notes.length > 0 ? (
                    notes.map(( { id, body, title, createdAt }, index ) => (     
                        <Note {...{ id, body, title, createdAt }} deleteNote={deleteNote} key={index} /> // --->  Menggunakan Spread Operator untuk mengirimkan seluruh data props dari komponen NotesList ke komponen Note
                    ))       
                ) : (
                    <h1>Tidak ada catatan yang tersedia</h1>
                )

                }
                <Addnote addNote={addNote} />
            </div>
        </>
    );
}

export default NotesList;