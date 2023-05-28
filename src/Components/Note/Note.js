import React from 'react'
import "./Note.css"

const Note = (props) => {      // by using the props we dynamically added the note description and datetime

    /* props structure
    {
        text:"text in the note"
        time:"23:40 PM 28 May"
        color:"red"
    }
    */

    const formatDate = (value) => {
      // value is in milliseconds from EPOCH
      if(!value) {
        return ""
      }
      const date = new Date(value);
      const monthNames = [
        "Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
      ]
      const days = [
        "Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"
      ]

      let hours = date.getHours();

      let AmPm = hours > 12 ? "PM" : "AM"

      hours = hours ? hours : "12"
      hours = hours > 12 ? 24-hours : hours

      let min = date.getMinutes();
      min = min < 10 ? "0"+min : min;

      let day = date.getDate();

      let month = monthNames[date.getMonth()];

      let year = date.getFullYear();  
      
      return `${hours}:${min} ${AmPm}, ${day} ${month} ${year}`;
    }

  return (
    <>
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea className="note-text" defaultValue={props.note.text}/>
            <div className="note-footer">
              <p>{formatDate(props.note.time)}</p>
              <img src="/images/delete.svg" 
                alt="Delete Note" 
                onClick={()=>props.deleteNote(props.note.id)}
              />
            </div>
        </div>
    </>
  )
}

export default Note