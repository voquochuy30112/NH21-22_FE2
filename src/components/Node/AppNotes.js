import React, { useState, useEffect } from 'react'
import NotesList from './NotesList'
import { nanoid } from 'nanoid'
import Search from './Search';
import Header from './Header';


function Notes() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "03/11/2021"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "03/11/2021"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "03/11/2021"
    },

  ]);


  const [searchNote, setSearchNote] = useState('');
  const [darkMode, setDarkMode] = useState(false)
  const [showGoToTop, setShowGoToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        //show
        setShowGoToTop(true)
      }
      else {
        //hide
        setShowGoToTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {

    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deletingNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes)
  }
  return (


    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearch={setSearchNote} />
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchNote))} handleAddNote={addNote} handleDelete={deletingNote} />
        {showGoToTop && (
          <button
            style={{
              position: 'fixed',
              right: 80,
              background: 'red',
              bottom: 20,
            }}
          >
            Go to Top
          </button>
        )}
      </div>
    </div>
  )
}

export default Notes
