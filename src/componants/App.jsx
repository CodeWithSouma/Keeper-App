import React,{useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import InputArea from "./InputArea";


function App() {

    const [notes, setNotes] = useState([{
        title:"This is title",
        content:"This is content"
    }]);

    function addNotes(note) {
        setNotes((previousNotes)=>{
            return [...previousNotes,note];
        })
    }

    function deleteItem(id) {
        setNotes((previousNotes)=>{
            return previousNotes.filter((note,index)=>{
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header/>
            <InputArea
                onAdd = {addNotes}
            />
            {notes.map((note,index) => (
                <Note
                    key = {index}
                    id = {index}
                    title = {note.title}
                    content = {note.content}
                    onItemDelete = {deleteItem}
                />
            ))}
            <Footer/>
        </div>
    );
}

export default App;