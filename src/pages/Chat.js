import React, { useState } from 'react'
import DatePagination from '../components/DatePagination'

export default function Chat() {


  const [selectedDate, setSelectedDate] = useState(''); // Set initial selected date
  
  


  const handlePageChange = (date) => {
    setSelectedDate(date);
  };


// Define the month names array
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Function to format the date as needed
const formatDate = (date) => {
  // Implement the logic to format the date as per your requirement
  return date.toISOString().split('T')[0];
};


const generateDatesForMonth = (year, month) => {
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  const dates = [];

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
    const dayOfWeekNumber = weekdays[date.getDay()];

    const dayOfWeekName = weekdays[dayOfWeekNumber];

    dates.push({
      date: formatDate(date),
      dayNumber: dayOfWeekNumber,
      dayName: dayOfWeekName,
      month: monthNames[date.getMonth()],
      year: date.getFullYear(),
      info: 'Random info for date'
    });
  }

  return dates;
};



  const selectedMonth = selectedDate.substring(5, 7);
  const selectedYear = selectedDate.substring(0, 4);





  // Example: Generate dates for June 2023
  const dates = generateDatesForMonth(2023, 5);


  return (
    <div className='bg-yellow-300 min-h-screen p-3'>
      <h3 className='font-custom text-8xl font-bold tracking-tighter text-black '>Chat.</h3>
      <p className='font-custom max-w-5xl text-4xl font-extralight tracking-tighter text-slate-700 leading-9 '>Customer service just got better, keep track of all customer messages and voice recordings all in one place. Reply or move the dialogue to another user account to handle response. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <hr/>

      <div className="container mx-auto">
      
      <DatePagination dates={dates} selectedDate={selectedDate} selectedMonth={selectedMonth}  selectedYear={selectedYear} onPageChange={handlePageChange} />
      {/* Rest of your application */}
    </div>

    </div>
  )
}
