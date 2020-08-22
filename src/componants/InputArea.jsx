import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



function InputArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [note, updateNote] = useState({
        title:"",
        content:""
    });

    function expand() {
        setExpanded(true);
    }


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
      <form className="create-note">
        {isExpanded &&(<input 
            name="title" 
            placeholder="Title"
            onChange={inputHandler}  
            value = {note.title}
            />)}
        <textarea 
            name="content" 
            placeholder="Take a note..." 
            onClick={expand}
            rows={isExpanded?"3":"1"}
            onChange={inputHandler} 
            value={note.content}
            />
        <Zoom in={isExpanded}>
        <Fab type ="submit" onClick={(event)=>{
            props.onAdd(note);
            updateNote({
                title:"",
                content:""
            });
            setExpanded(false);
            event.preventDefault();
        }}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default InputArea;
