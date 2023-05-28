import React from 'react'
import "./Note.css"

let timer = 500, 
  timeout;

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


    // debounce: koi code kuch time ke baad run kare. agar me google search bar me jaldi jaldi type karu to koi suggestion mere type karne ke thoda baad me aaaega, means response late aaega 
    // for example 15 letters ka humne google search bar me type kiya to to kya 15 alag alag baar API call hoga isse server pe load padega
    // to uske liye debounce use karte h ki 200ms ka time hoga, is timer ke baad ki API call hoga
    // har ek letter type karne ke baad API call hoga ye debounce hota h
    const debounce = (func) =>{
      clearTimeout(timeout)
      timeout = setTimeout(func, timer);
    }  

    // in localStorage
    const updateText = (text, id) => {
      debounce(() => props.updateText(text, id))
    }

  return (
    <>
        <div className="note" style={{backgroundColor:props.note.color}}>
            <textarea className="note-text" defaultValue={props.note.text} onChange={event => updateText(event.target.value, props.note.id)}/>
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