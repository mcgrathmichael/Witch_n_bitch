/* eslint-disable */
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect, useRef } from "react";
import Masonry from "masonry-layout";
import Cookies from "js-cookie";
import "./App.css";

function Note({ color, onDelete, children }) {
  const style = { backgroundColor: color };
  return (
    <div className=" md:h-fit">
      <div className="p-4 card md:w-96 h-fit bg-primary" style={style}>
        <button onClick={onDelete} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
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
        <div className="flex m-2 align-center">{children}</div>
      </div>{" "}
    </div>
  );
}

function NoteEditor({ onNoteAdd }) {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#FFA726");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleNoteAdd = () => {
    const notesStr = Cookies.get("notes");
    const notesArray = notesStr ? JSON.parse(notesStr) : [];

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
    <div className="container space-y-2 ">
      <textarea
        placeholder="Let's start our note here..."
        rows={5}
        className="w-full h-24 input input-bordered input-primary text-secondary ax-w-xs"
        value={text}
        onChange={handleTextChange}
      />
      <div className="space-x-2">
        <input
          type="radio"
          name="color-pick"
          value="#F06292"
          id="color1"
          className="text-pink-600 form-radio"
          onChange={handleColorChange}
        />
        <label
          htmlFor="color1"
          className="w-6 h-6 bg-pink-600 rounded-full cursor-pointer"
        />

        <input
          type="radio"
          name="color-pick"
          value="#BA68C8"
          id="color2"
          className="text-purple-600 form-radio"
          onChange={handleColorChange}
        />
        <label
          htmlFor="color2"
          className="w-6 h-6 bg-purple-600 rounded-full cursor-pointer"
        />

        <input
          type="radio"
          name="color-pick"
          value="#FFD54F"
          id="color3"
          className="text-yellow-500 form-radio"
          onChange={handleColorChange}
        />
        <label
          htmlFor="color3"
          className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"
        />

        <input
          type="radio"
          name="color-pick"
          value="#4FC3F7"
          id="color4"
          className="text-blue-500 form-radio"
          onChange={handleColorChange}
        />
        <label
          htmlFor="color4"
          className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"
        />

        <input
          type="radio"
          name="color-pick"
          value="#AED581"
          id="color5"
          className="text-green-500 form-radio"
          onChange={handleColorChange}
        />
        <label
          htmlFor="color5"
          className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"
        />
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
}

function NotesGrid({ notes, onNoteDelete }) {
  const gridRef = useRef(null);
  const msnryRef = useRef(null);

  useEffect(() => {
    msnryRef.current = new Masonry(gridRef.current, {
      itemSelector: ".note",
    });
  }, []);

  useEffect(() => {
    if (msnryRef.current) {
      msnryRef.current.reloadItems();
      msnryRef.current.layout();
    }
  }, [notes]);

  return (
    <div className="grid grid-cols-1 gap-4 masonry md:flex" ref={gridRef}>
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
}

function NoteSearch({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value.toLowerCase());
  };

  return (
    <input
      type="search"
      className="w-full max-w-xs input input-bordered input-primary"
      placeholder="Search notes..."
      onChange={handleSearch}
    />
  );
}

function NotesApp() {
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
    <div className="w-full py-4 space-y-4  md:px-12 md:flex md:w-fit notes-app card">
      <h2 className="text-2xl font-semibold">Dear Journal,</h2>

      <NoteSearch onSearch={setSearchValue} />
      <NoteEditor onNoteAdd={handleNoteAdd} />
      <NotesGrid notes={filteredNotes} onNoteDelete={handleNoteDelete} />
    </div>
  );
}

export default NotesApp;
