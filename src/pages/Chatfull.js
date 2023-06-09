import React from 'react'
import { useLocation } from 'react-router-dom';
import ChatArea from '../components/ChatArea';

export default function Chatfull() {

    const location = useLocation();
    const { name, email, date } = location.state || {};

    const messages = [
      { from: 'user', text: 'Hello' },
      { from: 'assistant', text: 'Hi, how can I assist you?' },
      { from: 'user', text: 'I have a question' },
      { from: 'assistant', text: 'Sure, go ahead and ask.' },
    ];

  return (
    <div>
{name && <h1>Name: {name}</h1>}
      <h1>Email: {email}</h1>
      <h1>Date: {date}</h1>

<ChatArea messages={messages} />
    </div>
  )
}
