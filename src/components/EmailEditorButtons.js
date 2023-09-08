import React from 'react';

const EmailEditorButtons = ({ onFormat, onInsertLink }) => {
  const handleFormat = (format) => {
    // Implement the logic to apply formatting (e.g., bold, italic, underline) to the selected text.
  };

  return (
    <div className="flex mb-4">
      <button className="mr-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={() => onFormat('bold')}>
        Bold
      </button>
      <button className="mr-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={() => onFormat('italic')}>
        Italic
      </button>
      <button className="mr-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={() => onFormat('underline')}>
        Underline
      </button>

      <button className="mr-2 px-2 py-1 bg-blue-500 text-white rounded" onClick={onInsertLink}>
        Insert Link
      </button>

      {/* Add more formatting buttons here */}
    </div>
  );
};

export default EmailEditorButtons;
