import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect, useRef } from "react";
import Masonry from "masonry-layout";
import Cookies from "js-cookie";

const Note = ({ color, onDelete, children }) => {
  const style = { backgroundColor: color };
  return (
    <div className="h-fit ">
      <div className="card p-4  flex bg-primary" style={style}>
        <button onClick={onDelete} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

const NoteEditor = ({ onNoteAdd }) => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#FFA726");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleNoteAdd = () => {
    const notesStr = Cookies.get("notes");
    let notesArray = notesStr ? JSON.parse(notesStr) : [];

    const newNote = {
      text,
      color,
      id: uuidv4(),
    };

    notesArray.push(newNote);

    Cookies.set("notes", JSON.stringify(notesArray), { expires: 7 });
    onNoteAdd(newNote);
    setText("");
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="container space-y-2">
      <textarea
        placeholder="Enter your note here..."
        rows={5}
        className="input input-bordered input-primary text-secondary  h-24 ax-w-xs w-full"
        value={text}
        onChange={handleTextChange}
      />
      <div className="space-x-2">
        <input
          type="radio"
          name="color-pick"
          value="#F06292"
          id="color1"
          className="form-radio text-pink-600"
          onChange={handleColorChange}
        />
        <label
          htmlFor="color1"
          className="w-6 h-6 rounded-full bg-pink-600 cursor-pointer"
        ></label>

        <input
          type="radio"
          name="color-pick"
          value="#BA68C8"
          id="color2"
          className="form-radio text-purple-600"
          onChange={handleColorChange}
        />
        <label
          htmlFor="color2"
          className="w-6 h-6 rounded-full bg-purple-600 cursor-pointer"
        ></label>

        <input
          type="radio"
          name="color-pick"
          value="#FFD54F"
          id="color3"
          className="form-radio text-yellow-500"
          onChange={handleColorChange}
        />
        <label
          htmlFor="color3"
          className="w-6 h-6 rounded-full bg-yellow-500 cursor-pointer"
        ></label>

        <input
          type="radio"
          name="color-pick"
          value="#4FC3F7"
          id="color4"
          className="form-radio text-blue-500"
          onChange={handleColorChange}
        />
        <label
          htmlFor="color4"
          className="w-6 h-6 rounded-full bg-blue-500 cursor-pointer"
        ></label>

        <input
          type="radio"
          name="color-pick"
          value="#AED581"
          id="color5"
          className="form-radio text-green-500"
          onChange={handleColorChange}
        />
        <label
          htmlFor="color5"
          className="w-6 h-6 rounded-full bg-green-500 cursor-pointer"
        ></label>
      </div>
      <button
        className="btn btn-primary btn-block"
        onClick={handleNoteAdd}
        style={{ backgroundColor: color }}
      >
        Add
      </button>
    </div>
  );
};

const NotesGrid = ({ notes, onNoteDelete }) => {
  const gridRef = useRef(null);
  const msnryRef = useRef(null);

  useEffect(() => {
    msnryRef.current = new Masonry(gridRef.current, {
      itemSelector: ".note",
      columnWidth: 200,
      gutter: 10,
      isFitWidth: true,
    });
  }, []);

  useEffect(() => {
    if (msnryRef.current) {
      msnryRef.current.reloadItems();
      msnryRef.current.layout();
    }
  }, [notes]);

  return (
    <div
      className="masonry md:flex  -z-10 grid grid-cols-1 gap-4 "
      ref={gridRef}
    >
      {notes.map((note) => (
        <Note
          key={note.id}
          onDelete={() => onNoteDelete(note)}
          color={note.color}
        >
          {note.text}
        </Note>
      ))}
    </div>
  );
};

const NoteSearch = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value.toLowerCase());
  };

  return (
    <input
      type="search"
      className="input input-bordered input-primary w-full max-w-xs"
      placeholder="Search notes..."
      onChange={handleSearch}
    />
  );
};

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const notesFromCookies = Cookies.get("notes");
    if (notesFromCookies) {
      setNotes(JSON.parse(notesFromCookies));
    }
  }, []);

  useEffect(() => {
    if (searchValue !== "") {
      setFilteredNotes(
        notes.filter(
          (note) =>
            note.text.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        )
      );
    } else {
      setFilteredNotes(notes);
    }
  }, [notes, searchValue]);

  const handleNoteDelete = (note) => {
    const newNotes = notes.filter((n) => n.id !== note.id);
    setNotes(newNotes);
    Cookies.set("notes", JSON.stringify(newNotes), { expires: 7 });
  };

  const handleNoteAdd = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="notes-app p-4 space-y-4">
      <h2 className="text-2xl font-semibold">Dear Journal,</h2>
      <NoteSearch onSearch={setSearchValue} />
      <NoteEditor onNoteAdd={handleNoteAdd} />
      <NotesGrid notes={filteredNotes} onNoteDelete={handleNoteDelete} />
    </div>
  );
};

export default NotesApp;
