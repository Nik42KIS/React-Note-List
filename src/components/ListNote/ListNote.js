import { faMarker, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './ListNote.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Tag = ({ text }) => {
  return (
    <span className="note-tag">
      {text}
    </span>
  );
};

const ListNote = ({ note, setNote }) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const [tags, setTags] = useState([]);

  let deleteNote = (id) => {
    let newNote = [...note].filter((item) => item.id != id);
    setNote(newNote);
  };
  let editNote = (id, title) => {
    setEdit(id);
    setValue(title);
    setTags([]);
    const matches = title.match(/#\w+/g);
    if (matches) {
      const newTags = matches.map((match) => match.slice(1));
      setTags(newTags);
    }
  };
  const saveNote = (id) => {
    let updateNote = [...note].map((item) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setNote(updateNote);
    setEdit(null);
    setTags([]);
  };
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const matches = inputValue.match(/#\w+/g);
    if (matches) {
      const newTags = matches.map((match) => match.slice(1));
      setTags(newTags);
    } else {
      setTags([]);
    }
    setValue(inputValue);
  };
  return (
    <div className="list-note-container">
      {note.map((item) => (
        <div key={item.id} className="note-item">
          {edit == item.id ? (
  <div>
    <input className="note-item-input" onChange={handleInputChange} value={value} />
    {value.split(/\s+/).map((word, index) => {
      const match = word.match(/^#(\w+)/);
      if (match && tags.includes(match[1])) {
        return <Tag key={index} text={word} className="highlight" />;
      } else {
        return <span key={index}>{word} </span>;
      }
    })}
  </div>
) : (
  <div className="note-item-title">
    {item.title.split(/\s+/).map((word, index) => {
      const match = word.match(/^#(\w+)/);
      if (match && item.hashtag.includes(match[1])) {
        return <Tag key={index} text={word} className="highlight" />;
      } else {
        return <span key={index}>{word} </span>;
      }
    })}
  </div>
)}

          {edit == item.id ? (
            <div>
              <button className="note-item-button" onClick={() => saveNote(item.id)}>
                <FontAwesomeIcon icon={faSave} />
              </button>
            </div>
          ) : (
            <div>
              <button className="note-item-button" onClick={() => deleteNote(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button className="note-item-button" onClick={() => editNote(item.id, item.title)}>
                <FontAwesomeIcon icon={faMarker} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListNote;
