import Notes from "../Notes/Notes";
import './NotesContainer.css'
function NotesContainer(props) {
    const reverArray = (arr) => {
        const array = [];

        for(let i = arr.length-1; i>=0; --i){
            array.push(arr[i]);
        }
        return array;
    }

    const notes = reverArray(props.notes);
    return(
        <div className="note-container">
            <h2>Notes</h2>
            <div className="note-container_notes custom-scroll">
           
           {notes?.length>0 ? notes.map((item)=>{
           return(
            <Notes key={item.id} notes={item} 
            deleteNote={props.deleteNote}
            updateText = {props.updateText}
            />
           )   
        }):<h3>No Notes present</h3>}
            
            </div>

        </div>
    )
}

export default NotesContainer;