import React, { useState, useEffect } from 'react'
import forest from "../images/forest.jpg"
import sunflower from "../images/sunflower.jpg"
import { db } from '../config/firebaseConfig';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  Timestamp
} from 'firebase/firestore';

import { UserAuth } from '../context/AuthContext';





export default function Announcement() {

  const {user} = UserAuth();

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [topic, setTopic] = useState('');

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      title: topic,
      completed: false,
      date: new Date().toLocaleString()
      
    });
    setInput('');
  };

  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };



const AnnounceList  = ({ todo, toggleComplete, deleteTodo }) => {
  return (


    

<div className='rounded-md bg-slate-400 border-2 border-black p-1  '>


  <div className='flex flex-row justify-between mb-3'>

<button onClick={() => toggleComplete(todo)}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
</button>


<button onClick={() => deleteTodo(todo.id)}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>

</div>

<p className='font-custom text-xl font-medium tracking-tighter'>Sent on {todo.date}</p>

{/*<input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} /> */}

<p className={'text-clip overflow-hidden font-custom text-xl font-medium tracking-tighter first-line:font-bold first-line:mb-11  '} >
          {todo.text}
</p>

<p>From {user.displayName}</p>
</div>

)
}








  return (

    <div className='p-2  '>

      <div className='grid grid-cols-5 gap-2 '>


<div className='col-span-2 h-screen sticky top-0'>

<img 
className='object-bottom object-cover w-full h-full rounded-md absolute '
src={forest} alt="newsletter"
/>

<button>
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-3 my-1 relative stroke-gray-100 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>
</button>


  <h2 className='text-white font-custom text-3xl font-medium tracking-tighter line-clamp-2 p-3 relative'>Announcement.</h2>
  <hr className='border-white'/>



  <p className='text-white font-custom text-6xl font-medium tracking-tighter p-3 relative mt-80'>Share a quick announcement to everybody in a second.</p>


</div>

<div className='col-span-3'>

<h2 className='font-custom text-5xl font-medium tracking-tighter mb-10'>Create an announcement</h2>

<form onSubmit={createTodo} >


<textarea 
className='h-13 w-full rounded-md h-56 bg-slate-100 border-black border-2 relative first-line:uppercase first-line:font-bold first-line:mb-11 place-holder:lowercase  '
placeholder ='Space after typing topic'
value={input}
onChange={(e) => setInput(e.target.value)}
>




{/*
<textarea
  className='text-black text-2xl font-medium absolute top-0 '
  placeholder='Title'
  value={topic}
  onChange={(e) => setTopic(e.target.value)}
  />*/}



</textarea>


<button className='bg-black w-full rounded-md text-white font-custom text-2xl font-medium tracking-tighter py-2'>
  Announce
</button>

</form>


{/*<p className='text-black text-center font-custom text-xl font-medium tracking-tighter mt-32'>Created & Designed by August Studio</p>*/}
  

<div className='grid grid-cols-2 gap-2 mt-3 '>

{todos.map((todo, index) => (
          

<AnnounceList
 key={index}
todo={todo}
toggleComplete={toggleComplete}
deleteTodo={deleteTodo}

              />



          ))}

</div>



</div>






      </div>







    </div>
  )
}
