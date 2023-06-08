import React, {useState} from 'react'
import DatePagination from '../components/DatePagination'

export default function Phat() {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedDayNumber, setSelectedDayNumber] = useState('');
    const [selectedDayName, setSelectedDayName] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
  
    const handleDateClick = (date, dayNumber, dayName, month, year) => {
      setSelectedDate(date);
      setSelectedDayNumber(dayNumber);
      setSelectedDayName(dayName);
      setSelectedMonth(month);
      setSelectedYear(year);
    };
  
    const generateDatesForMonth = (year, month) => {
      const startDate = new Date(year, month, 1);
      const endDate = new Date(year, month + 1, 0);
      const dates = [];
  
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
      for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        const dayOfWeekNumber = date.getDay();
        const dayOfWeekName = weekdays[dayOfWeekNumber];
  
        dates.push({
          date: formatDate(date),
          dayNumber: dayOfWeekNumber + 1,
          dayName: dayOfWeekName,
          month: monthNames[date.getMonth()],
          year: date.getFullYear(),
          info: 'Random info for date'
        });
      }
  
      return dates;
    };
  
    const dates = generateDatesForMonth(selectedYear, selectedMonth);
  
    return (
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mt-8 mb-4">Date Pagination Example</h1>
        <div className="mb-4">
          <MonthDropdown
            selectedMonth={selectedMonth}
            onChange={(month) => setSelectedMonth(month)}
          />
          <YearDropdown
            selectedYear={selectedYear}
            onChange={(year) => setSelectedYear(year)}
          />
        </div>
        <DatePagination
          dates={dates}
          selectedDate={selectedDate}
          onPageChange={handleDateClick}
        />
        {selectedDate && (
          <div className="mt-4">
            <p>Selected Date: {selectedDate}</p>
            <p>Selected Day Number: {selectedDayNumber}</p>
            <p>Selected Day Name: {selectedDayName}</p>
            <p>Selected Month: {selectedMonth}</p>
            <p>Selected Year: {selectedYear}</p>
          </div>
        )}
      </div>
    );
  };
