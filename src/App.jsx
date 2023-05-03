import { useState } from 'react';

import { CSSTransition } from 'react-transition-group';

import { Calendar } from './Calendar';
import { Year } from './Year.jsx';

export default function App() {

  const [calendarType, setCalendarType] = useState(true)
  const [monthIndex, setMonthIndex] = useState(new Date().getMonth());

  function handleCalendarType() {
    console.log('teste')
    setCalendarType(!calendarType)
  }

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());


  return (
    <div className='font-["Lato"] bg-[#F5F5F5] h-screen flex justify-center items-center overflow-hidden'>
      <CSSTransition
        in={calendarType}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Calendar
          changeToYear={handleCalendarType}
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}
          monthIndex={monthIndex}
          setMonthIndex={setMonthIndex}
        />
      </CSSTransition>
      <CSSTransition
        in={!calendarType}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Year
          changeToMonth={handleCalendarType}
          currentYear={currentYear}
          setCurrentYear={setCurrentYear}
          monthIndex={monthIndex}
          setMonthIndex={setMonthIndex}
        />
      </CSSTransition>
    </div>
  )
}