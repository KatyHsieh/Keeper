import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreactAera from "./CreactAera"
import Note from "./Note";


function App() {
  const [note, setNote] = useState([])

  function addNote(x) {
  setNote(pre => {
    return [...pre, x]
  });
};
  function deleted(idnumber) {
    setNote(pre => {
      return pre.filter((item, index)=> {
        return index !== idnumber
      });
    });
  };
  return (
    <div>
      <Header />
      <CreactAera addnote={addNote}/>
      {note.map((item, index) => (
        <Note
        key={index}
        id={index}
        title={item.title}
        content={item.content}
        delete={deleted}
         />
      ))}
      <Footer />
    </div>
  );
}

export default App;
