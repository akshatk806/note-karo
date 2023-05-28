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

  return (
    <>
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea className="note-text" defaultValue={props.note.text}/>
            <div className="note-footer">
              <p>{props.note.time}</p>
              <img src="/images/delete.svg" alt="Delete Note" />
            </div>
        </div>
    </>
  )
}

export default Note