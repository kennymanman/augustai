import React, { useState } from 'react';

const ChatArea = ({ messages }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      // Process the new message (e.g., send it to an API)
      console.log('New message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.from === 'user' ? 'justify-end' : 'justify-start'
            } flex mb-4`}
          >
            <div
              className={`${
                message.from === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              } py-2 px-4 rounded-lg max-w-xs`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-100 py-2 px-4">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            className="w-full border rounded-lg py-2 px-4"
            placeholder="Type your message..."
            value={newMessage}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;
