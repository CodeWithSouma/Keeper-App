import React,{useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
// import notes from "../notes"
import InputArea from "./InputArea";


function App() {

    const [notes, setNotes] = useState([{
        title:"This is title",
        content:"This is content"
    }]);

    function addNotes(note) {
        console.log(note);
        setNotes((previousNotes)=>{
            return [...previousNotes,note];
        })
    }

    return (
        <div>
            <Header/>
            <InputArea
                onAdd = {addNotes}
            />
            {notes.map((note) => (
                <Note
                    key = {note.key}
                    title = {note.title}
                    content = {note.content}
                />
            ))}
            <Footer/>
        </div>
    );
}

export default App;