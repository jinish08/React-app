import React from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";
import {useState,useEffect} from "react";

function Review() {

    const [notes, setNotes] = useState([]);

    useEffect(()=>{
      fetch("/receive").then(res=>{
        if(res.ok){
          return res.json()
        }
      }).then(jsonRes=>setNotes(jsonRes));
    })

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <h1 className="text-center review-h">Please Share Your Previous Experience With Us</h1>
      <CreateArea />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      <br />
      <br />
      <br />
            
    </>
  );
}

export default Review;
