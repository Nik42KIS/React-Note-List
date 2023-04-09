import React, { useState } from 'react';
import './AddNote.scss';

const AddNote = ({ note, setNote }) => {
  const [value, setValue] = useState('');

  let saveNote = () => {
    if (value !== '') {
      let newNote = [...note, { id: note.length + 1, title: value, hashtag: [] }];
      setNote(newNote);
      setValue('');
    }
  };

  return (
    <div className="add-note-container">
      <input
        className="add-note-input"
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="add note"
        value={value}
      />
      <button className="add-note-button" onClick={saveNote}>
        Add
      </button>
    </div>
  );
};

export default AddNote;
