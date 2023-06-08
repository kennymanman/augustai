import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';





export default function Calendar() {



  return (
    <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker 
       
        orientation="potriat" className='bg-white rounded-md '  
        />

    </LocalizationProvider>

    </div>
  )
}
