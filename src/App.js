
import Header from './components/Header/Header';
import ListNote from './components/ListNote/ListNote';
import AddNote from './components/AddNote/AddNote';
import { useState } from 'react';


function App() {

  const [note,setNote] = useState([
   
  ])

  return (
    <div>
      <Header />
      <AddNote note = {note} setNote = {setNote} />
      <ListNote note = {note} setNote = {setNote} />
    </div>
  );
}

export default App;
