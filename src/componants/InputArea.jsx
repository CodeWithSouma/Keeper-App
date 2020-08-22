import React, { useState } from "react";

function InputArea(props) {

    const [note, updateNote] = useState({
        title:"",
        content:""
    });


    function inputHandler(event) {
        // use object destructure 
        // N:B event.target is a object
        const {value,name} = event.target;
        updateNote((previousValue)=>{
            return {
                // use sprade operator basically we add previous object 
                // and then update property of that object
                ...previousValue,
                [name]:value
            }
        })
    }
  

  return (
    <div>
      <form>
        <input 
            name="title" 
            placeholder="Title"
            onChange={inputHandler}  
            value = {note.title}
            />
        <textarea 
            name="content" 
            placeholder="Take a note..." 
            rows="3"
            onChange={inputHandler} 
            value={note.content}
            />
        <button type ="submit" onClick={(event)=>{
            props.onAdd(note);
            updateNote({
                title:"",
                content:""
            })
            event.preventDefault();
        }}>Add</button>
      </form>
    </div>
  );
}

export default InputArea;
