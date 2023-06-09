import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import db from "../firebaseConfig"










const DatePagination = ({ dates, selectedDate, onPageChange,  onMonthChange, onYearChange }) => {

const containerRef = useRef(null);
const [selectedDetails, setSelectedDetails] = useState(null);
const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const navigate = useNavigate();


    const scrollLeft = () => {
      containerRef.current.scrollLeft -= 200; // Adjust scroll distance as per your requirement
    };
  
    const scrollRight = () => {
      containerRef.current.scrollLeft += 200; // Adjust scroll distance as per your requirement
    };


    const handleDateClick = (date, month, year,  dayNumber, dayName, day, firstname, lastname, email, message) => {
      const details = fetchDetailsFromAPI(date); // Replace with your API call or data retrieval logic
  
      setSelectedDetails(details);
      setSelectedMonth(month);
      setSelectedYear(year);

      

        // Set the selected month and year in the dropdown menus
  const monthOption = dates.find(d => d.date === date);
  if (monthOption) {
    setSelectedMonth(monthOption.month);
    setSelectedYear(monthOption.year);
  }

      onPageChange(date);
    };
  


   const monthOptions = Array.from(new Set(dates.map(date => date.month)));
const renderMonthOptions = monthOptions.map(month => (
  <option key={month} value={month}>
    {month}
  </option>
));



// Generate unique year options
const yearOptions = Array.from(new Set(dates.map(date => date.year)));
const renderYearOptions = yearOptions.map(year => (
  <option key={year} value={year}>
    {year}
  </option>
));





    
    const fetchDetailsFromAPI = (date) => {
      // Simulating API call or data retrieval
      // Replace with your actual implementation
      if (date === '2023-06-01') {
        return [{ name: 'John Doe', email: 'john.doe@example.com'},
        { name: 'Jane Smith', email: 'jane.smith@example.com'}
      ];

      } else if (date === '2023-06-02') {
        return [{ name: 'Jane Smith', email: 'jane.smith@example.com' },
        { name: 'Jane Smith', email: 'jane.smith@example.com' }
      ];

    } else if (date === '2023-07-03') {
      return [{ name: 'Jane Smith', email: 'jane.smith@example.com' },
      { name: 'Jane Smith', email: 'jane.smith@example.com' }
    ];

      } else {
        return [];
      }
    };





    const getDetailsCountForDate = (date) => {
      const details = fetchDetailsFromAPI(date);
      return details.length;
    };


    const handleOpenLink = (name, email, date) => {
      navigate('/Chatfull', { state: { name, email, date} });
    };

  return (
<div>


<div className='grid grid-cols-5'>


<select className="col-span-2 mx-2 px-2 py-1 rounded-lg bg-gray-200"

value={selectedMonth}
onChange={(e) => setSelectedMonth(e.target.value)}
>
<option value="">Month</option>
{renderMonthOptions}

          {/*<option value="">Month</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>*/}
          
</select>



        <select className=" col-span-1 mx-2 px-2 py-1 rounded-lg bg-gray-200" 
        value={selectedYear}
         onChange={(e) => setSelectedYear(e.target.value)}>

<option value="">Year</option>
  {renderYearOptions}

          {/*
          <option value="">Year</option>
          <option value="2022">2022</option>
        <option value="2023">2023</option>*/}
      
        </select>


</div>
 

<div className="flex flex-row justify-center mt-4 ">

{/*
<div className="flex mb-2">
        <select className="mx-2 px-2 py-1 rounded-lg bg-gray-200" value={selectedMonth} onChange={onMonthChange}>
          <option value="">Month</option>
          <option value="01">January</option>
          <option value="02">February</option>
          
        </select>*/}
{/*
        <select className="mx-2 px-2 py-1 rounded-lg bg-gray-200" value={selectedYear} onChange={onYearChange}>
          <option value="">Year</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
      
        </select>
      </div>
*/}





 
<button
        className="mx-2 px-2 py-1 rounded-full bg-gray-200 text-gray-600"
        onClick={scrollLeft}
      >
        {'<'}
</button>

        <div className="flex overflow-x-auto" ref={containerRef}>

        
      {dates.map((date, index) => (


       <button
          key={date.date}
          className={`mx-2 px-3 py-2 rounded-full relative ${
            date.date === selectedDate ? 'bg-green-500 text-black font-custom font-semibold' : 'bg-gray-200'
          }`}
          onClick={() => handleDateClick(date.date, date.month, date.year, date.dayNumber, date.dayName)}
        >

<div className='left-0 text-sm rounded-full bg-red-400'>{getDetailsCountForDate(date.date)}</div>

<div className="text-sm font-semibold pb-4 pt-2">{date.dayNumber}</div>

          <div className="text-xs text-gray-600 mt-50">{date.dayName}</div>

           
        </button>

      ))}
      </div>


      <button
        className="mx-2 px-2 py-1 rounded-full bg-gray-200 text-gray-600"
        onClick={scrollRight}
      >
        {'>'}
      </button>





    </div>

    {selectedDetails && (
        <div className="mt-4">
          {selectedDetails.map((detail, index) => (
            <div key={index}>
              <div className="text-lg font-bold">{detail.name}</div>
              <div className="text-sm text-gray-600">{detail.email}</div>

           
                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => handleOpenLink(detail.name, detail.email, detail.date)}
                >
                  Open Link
                </button>
              

            </div>
          ))}
  </div>
      )}

    </div>
   
  );
};

export default DatePagination;

