import { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Input from "./components/input";
import Notes from "./components/notes";

import './styles/index.css';
import './styles/header.css';
import './styles/input.css';
import './styles/notes.css';
import './styles/footer.css';

function App() {

    const [notes, setNotes] = useState([]);

    const [id_count, setCount] = useState(notes.length);

    function addNote(noteObj) {
        setNotes(prevNotes => [
            {
                id: id_count + 1,
                ...noteObj
            },
            ...prevNotes
        ]);
        setCount(id_count + 1);
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((element) => {
                return element.id !== id;
            })
        })
    }

    return (
        <div>
            <Header />
            <Input addNote={addNote}/>
            <Notes notes={notes} deleteNote={deleteNote}/>
            <Footer />
        </div>
    );
}

export default App;
