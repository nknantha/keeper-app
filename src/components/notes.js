import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

    function handleDelete(event) {
        props.deleteNote(props.id);
        event.preventDefault();
    }

    return (
        <div className='note'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            {/* <Fab>text</Fab> */}
            <button onClick={handleDelete}>
                <DeleteIcon
                    sx={{
                        verticalAlign: 'middle',
                        fontSize: '1.6rem',
                        m: '2px'
                    }} />
            </button>
        </div>
    )
}

function Notes(props) {

    return (
        <div className="notes">
            {props.notes.map(noteObj => (
                <Note
                    key={noteObj.id}
                    id={noteObj.id}
                    title={noteObj.title}
                    content={noteObj.content}
                    deleteNote={props.deleteNote}
                />))
            }
        </div>
    )
}

export default Notes;