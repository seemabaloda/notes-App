import './Notes.css';
import deleteIcon from '../../assets/delete.png';


let timer = 500, timeout
function Notes(props) {
    const formatDate = (value) => {
        if (!value) return "";
        const date = new Date(value);

        let hrs = date.getHours();
        let amPm = hrs >= 12 ? "PM" : "AM";
        hrs = hrs % 12 || 12; // Convert to 12-hour format, with 12 as the fallback for 0
        let min = date.getMinutes();
        min = min < 10 ? "0" + min : min; // Add leading zero if needed
        let day = date.getDate();
        let month = date.toLocaleString('default', { month: 'short' }); // Get short month name

        return `${day} ${month}, ${hrs}:${min} ${amPm}`;
    };

    const debounce = (func) => {
        clearTimeout(timeout);
        timeout = setTimeout(func, timer);
    }

    const updateText = (text,id) => {
        debounce(()=>props.updateText(text,id))
    }

    return (

        <div className="note" style={{ backgroundColor: props.notes.color }}>
            <textarea className="note_text"
                defaultValue={props.notes.text}
                onChange={(event) => { updateText(event.target.value,props.notes.id) }}
            />
            <div className='note_footer'>
                <p>{formatDate(props.notes.time)}</p>
                <img
                    src={deleteIcon}
                    alt='delete'
                    style={{ width: '20px' }}
                    onClick={() => props.deleteNote(props.notes.id)}
                />
            </div>

        </div>

    );
}

export default Notes;