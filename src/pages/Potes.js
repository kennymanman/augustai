import React,{ useState, useEffect } from 'react'
import Todo from "../components/Todo"
import { db } from '../config/firebaseConfig';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

import { AiOutlinePlus } from 'react-icons/ai';
import NotesApp from "../components/NotesApp"



const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
};



export default function Notes() {


  const [selectedSection, setSelectedSection] = useState('notes');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Create todo
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
    await addDoc(collection(db, 'todos'), {
      text: input,
      completed: false,
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



  return (



<div className=' bg-yellow-100 h-screen p-2'>
        
    <h1 className='text-start font-custom text-7xl font-bold tracking-tighter'>Notes</h1>

    <div className='grid grid-cols-8'>
        
    <div className='col-span-2'>

<h2>Quick links</h2>

<input
 className='rounded-full  text-center mt-3 m-1 outline  outline-slate-500'
 
  placeholder  ='Search'
  type="text" 
  
  />
       <ul className="">

       <li
            className={`py-2 px-4 cursor-pointer ${
              selectedSection === 'favorites' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleSectionChange('favorites')}
          >
            Favorites
          </li>


          <li
            className={`py-2 px-4 cursor-pointer ${
              selectedSection === 'notes' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleSectionChange('notes')}
          >
            My notes
          </li>


          <li
            className={`py-2 px-4 cursor-pointer ${
              selectedSection === 'todo' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleSectionChange('todo')}
          >
            Todo list 
            {todos.length < 1 ? null : (
      <p className={style.count}>{`${todos.length} `}</p>
    )}
          </li>


          <li
            className={`py-2 px-4 cursor-pointer ${
              selectedSection === 'contact' ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleSectionChange('contact')}
          >
            Contact
          </li>
        </ul>
 
      </div>





     <div className='col-span-6'>

      {/* Content of the selected section */}
      {selectedSection === 'notes' && 

      <>
      <h1>Notes Section</h1>
      <NotesApp />
      </>
      }


      {selectedSection === 'todo' &&
      
      <>
      <h1>Todo list Section</h1>
      <form onSubmit={createTodo} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Add Todo'
      />
      <button className={style.button}>
        <AiOutlinePlus size={30} />
      </button>
    </form>
    <ul>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
    {todos.length < 1 ? null : (
      <p className={style.count}>{`You have ${todos.length} todos`}</p>
    )}
     </> 
      }






      {selectedSection === 'contact' && <h1>Contact Section</h1>}

     </div>


        </div>
        
  </div>





  
  )
}
