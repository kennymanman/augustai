import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { GrAddCircle } from "react-icons/gr";

import { Link } from "react-router-dom";
import field from "../images/fieldseven.jpg"
import * as XLSX from "xlsx";




const Audience = () => {

  const menus = [
    { name: "Create new audience", link: "/", icon:GrAddCircle },
  // { name: "user", link: "/", icon: AiOutlineUser },
    //{ name: "messages", link: "/", icon: FiMessageSquare },
    //{ name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    //{ name: "File Manager", link: "/", icon: FiFolder },
    //{ name: "Cart", link: "/", icon: FiShoppingCart },
    //{ name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
  //{ name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);


  const [showForm, setShowForm] = useState(false);
  const [showEdit, setEditForm] = useState(false);

  const [notes, setNotes] = useState([]);
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
   const [selectedNote, setSelectedNote] = useState(null);
   const [editedTopic, setEditedTopic] = useState("");
   



  



  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      topic,
      content,
      date: new Date().toLocaleString()
    };
    setNotes([...notes, newNote]);
    setTopic("");
    setContent("");
    setShowForm(false);
  };



  const handleNoteClick = (index) => {
    setSelectedNote(index);
    setEditedTopic(notes[index].topic);
  };


  const handleTopicEdit = (e) => {
    setEditedTopic(e.target.value);
  };

  const handleTopicSubmit = () => {
    const updatedNotes = [...notes];
    updatedNotes[selectedNote].topic = editedTopic;
    setNotes(updatedNotes);
  };


  const handleNoteEdit = (e) => {
    const updatedNotes = [...notes];
    updatedNotes[selectedNote].content = e.target.value;
    setNotes(updatedNotes);
  };

  


  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  }


  return (

    <section className="flex gap-6 " >

<img 
className='object-bottom object-cover w-full h-full fixed  '
src={field} alt="newsletter"
/>


{/*<h1 className="text-white text-end mt-8 absolute font-custom text-6xl font-medium tracking-tighter ">Create your personalized mailing list audience.</h1>*/}




      <div
        className={`bg-green-500 min-h-screen rounded-r-lg relative   ${
          open ? "w-96" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >





 <div className="py-3 grid  ">

 <Link to="/Presentation">
<svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer place-self-start w-6 h-6 mx-1 my-1 relative stroke-gray-700 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>
</Link>





          <HiMenuAlt3
            size={26}
            color={"black"}
            className="cursor-pointer place-self-end "
            onClick={() => setOpen(!open)}
          />


</div>


<h3 className="text-black font-custom text-5xl font-medium tracking-tighter line-clamp-2 p-2  ">Audience</h3>

<hr/>



<div className="flex sticky top-20 mb-4 bg-green-500 ">




<button  onClick={() => setShowForm(true)}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 fill-black  ">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
</svg>
</button>

<h4 className="text-black font-custom text-2xl font-medium tracking-tighter line-clamp-2 pt-2 ">Create new audience</h4>



</div>



{notes.map((note, index) => (
          <div
            key={index}
            className={`p-4 border-b cursor-pointer relative ${
              selectedNote === index ? "bg-white rounded-md text-black" : "bg-black rounded-md"
            }`}
            onClick={() => handleNoteClick(index)}
          >
            <h3 className=" font-medium mb-2 font-custom text-2xl tracking-tighter line-clamp-2  ">{note.topic}</h3>

         

            <p className="text-gray-500 mb-1 text-xs ">{note.date}</p>
          </div>
        ))}
      </div>



      {showForm && (
        <div className="w-3/4 p-4 bg-black relative rounded-lg">


<button  onClick={() => setShowForm(false)}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 fill-white">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
</svg>

</button>


          <form onSubmit={handleFormSubmit}>
            <div className="mb-4 ">
              <label className="block mb-2 text-white font-custom text-3xl tracking-tighter mt-4">Audience Name</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full rounded-lg"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-white font-custom text-3xl tracking-tighter">Audience summary</label>
              <textarea
                className="border border-gray-300 p-2 w-full"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              >

</textarea>


<label className="block mb-2 mt-4 text-white font-custom text-3xl tracking-tighter">Upload Google sheet or .Csv file</label>
<input 

        type="file" 
        accept=".xlsx, .xls" 
        onChange={handleFileUpload} 
      />

      {data.length > 0 && (
        <table className="table text-white">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

            </div>
            <button className="py-2 px-4 bg-green-600 text-black font-custom rounded-md " type="submit">
              Create
            </button>
          </form>
        </div>
      )}


{selectedNote !== null && (


        <div className="w-3/4 p-4 bg-black relative">

<button  onClick={() => selectedNote("")}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 fill-white">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
</svg>

</button>

          <h2 className="text-white font-custom text-3xl tracking-tighter">Edit audience group</h2>

          <h2 className="text-white font-custom text-xl tracking-tighter">Auto-save is enabled to save changes once made.</h2>


          <textarea
            className="border border-gray-300 p-2 w-full"
            value={notes[selectedNote].content}
            onChange={handleNoteEdit}
          ></textarea>
        </div>

        


      )}


{/*
{selectedNote !== null && (

  <form onSubmit={handleNoteEdit}>
        <div className="w-3/4 p-4 bg-gray-100">

          <input
          value={notes[selectedNote].topic}
          onChange={(e) => setTopic(e.target.value)}
          ></input>


          <textarea
            className="border border-gray-300 p-2 w-full"
            value={notes[selectedNote].content}
            
          ></textarea>

<button className="py-2 px-4 bg-green-500 text-white" type="submit">
              Edit
            </button>

        </div>

       
  </form>
      )}*/}









      
    </section>
  );
};

export default Audience;