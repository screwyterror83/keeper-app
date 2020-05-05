import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "./notes";
import createNote from "./createNote"

const App = () => {
  return (
    <div>
      <Header />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}


export default App;
