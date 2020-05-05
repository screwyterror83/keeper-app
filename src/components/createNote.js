import React from "react";
import Note from "./Note";

const createNote = note => <Note key={note.key} title={note.title} content={note.content}/>


export default createNote;
