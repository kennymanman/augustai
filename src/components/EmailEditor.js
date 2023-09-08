import React, { useState, useRef } from 'react';
import EmailEditorButtons from './EmailEditorButtons';

const EmailEditor = () => {
  const [content, setContent] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [draftSaved, setDraftSaved] = useState(false);
  const editorRef = useRef(null);



  const handleChange = (e) => {
    setContent(e.target.value);
    setDraftSaved(false);
  };

  
  const handleFormat = (format) => {
    const editor = editorRef.current;
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (selectedText) {
      const range = selection.getRangeAt(0);
      const newNode = document.createElement(format);

      range.surroundContents(newNode);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      const newNode = document.createElement(format);
      editor.appendChild(newNode);
    }
    // Implement the logic to apply formatting (e.g., bold, italic, underline) to the selected text.
  };




  const handleInsertLink = () => {
    // Implement the logic to insert a link at the current cursor position.
  };

  const handleAttachmentChange = (e) => {
    const file = e.target.files[0];
    setAttachments([...attachments, file]);
  };

  const handleSaveDraft = () => {
    // Implement the logic to save the current email content as a draft.
    setDraftSaved(true);
  };



  return (
    <div>
     
     
 <EmailEditorButtons  onFormat={handleFormat} onInsertLink={handleInsertLink} />



 <div
        ref={editorRef}
        className="w-full h-48 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        contentEditable
        onInput={handleChange}
      />


{/*
      <textarea
        className="w-full h-48 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        value={content}
        onChange={handleChange}
      />*/}


<div className="mt-4">
        <input type="file" onChange={handleAttachmentChange} />
        {attachments.map((attachment, index) => (
          <div key={index}>{attachment.name}</div>
        ))}
      </div>

      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleSaveDraft}
      >
        Save Draft
      </button>

      {draftSaved && <div className="text-green-500 mt-2">Draft saved!</div>}
    </div>
  );
};

export default EmailEditor;
