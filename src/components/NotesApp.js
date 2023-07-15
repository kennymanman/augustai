import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const [editingNoteId, setEditingNoteId] = useState(null);

  const handleNewNote = () => {
    if (newNoteTitle.trim() !== '' && newNoteContent.trim() !== '') {
      const newNote = {
        id: uuidv4(),
        title: newNoteTitle,
        content: newNoteContent,
        createdAt: new Date(),
      };
      setNotes([...notes, newNote]);
      setNewNoteTitle('');
      setNewNoteContent('');
    }
  };

  const handleEditNote = (note) => {
    setEditingNoteId(note.id);
    setNewNoteTitle(note.title);
    setNewNoteContent(note.content);
  };

  const handleUpdateNote = () => {
    if (newNoteTitle.trim() !== '' && newNoteContent.trim() !== '') {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === editingNoteId
            ? { ...note, title: newNoteTitle, content: newNoteContent }
            : note
        )
      );
      setEditingNoteId(null);
      setNewNoteTitle('');
      setNewNoteContent('');
    }
  };

  const handleDeleteNote = (noteId) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-bold">Notes App</h1>
        <button
          className="ml-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={editingNoteId ? handleUpdateNote : handleNewNote}
        >
          {editingNoteId ? 'Update Note' : 'New Note'}
        </button>
      </div>

      {/* Note Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          className="border border-gray-400 rounded px-4 py-2 w-full mb-2"
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
        />
        <textarea
          placeholder="Note Content"
          className="border border-gray-400 rounded px-4 py-2 w-full h-24"
          value={newNoteContent}
          onChange={(e) => setNewNoteContent(e.target.value)}
        ></textarea>
      </div>

      {/* Display Notes */}
      <div>
        {notes.length > 0 ? (
          notes.map((note) => (
            <div
              key={note.id}
              className="border border-gray-400 rounded p-4 mb-4"
            >
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-bold">{note.title}</h3>
                <div className="flex space-x-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                    onClick={() => handleEditNote(note)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p>{note.content}</p>
              <p className="text-gray-500 text-sm">
                Created At:{' '}
                {new Date(note.createdAt).toLocaleString('en-US', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
              </p>
            </div>
          ))
        ) : (
          <p>No notes found.</p>
        )}
      </div>
    </div>
  );
};

export default NotesApp;
