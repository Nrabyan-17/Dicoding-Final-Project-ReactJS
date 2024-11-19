import { MdDeleteForever } from 'react-icons/md'
const Note = ( {id, body, title, createdAt, deleteNote}, key ) => {
    return (
        <>
            <div className="note" id={id} key={key}>
                <div className="note-title">{title}</div>
                
                <div className="para">{body}</div>

                <div className="note-footer">
                    <small>{createdAt}</small>
                    <span className='delete' ><MdDeleteForever onClick={() => deleteNote(id)} className="md-delete-icon" size="1.3em" /></span>
                </div>
            </div>
        </>
    );
}

export default Note;