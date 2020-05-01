import React from "react";



const Note = () => {
  const title = "Lorem Ipsum";
  const content =
    "sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor at auctor urna nunc id";


  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Note;
