import { useEffect, useState } from 'react';
import moment from 'moment';

import { Days } from './CalendarStyle';

import { ReactComponent as LeftArrow } from './assets/left-arrow.svg';
import { ReactComponent as RightArrow } from './assets/right-arrow.svg';
import { ReactComponent as ArrowDropDown } from './assets/arrow-drop-down.svg';

export function Calendar(props) {

  const [dateSelect, setDateSelect] = useState([]);

  function previousMonth() {
    if (props.monthIndex === 0) {
      props.setCurrentYear(props.currentYear - 1)
      props.setMonthIndex(11)
    } else {
      props.setMonthIndex(props.monthIndex - 1)
    }
  }
  function nextMonth() {
    if (props.monthIndex === 11) {
      props.setCurrentYear(props.currentYear + 1)
      props.setMonthIndex(0)
    } else {
      props.setMonthIndex(props.monthIndex + 1)
    }
  }


  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  moment.updateLocale("pt", {
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
  });


  return (
    <div className='font-["Lato"] bg-[#F5F5F5] h-screen flex justify-center items-center overflow-hidden'>
      <div className='py-8 px-6 bg-[#FFFFFF] flex flex-col gap-4 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.16)]'>
        <MonthCard
          key={month[props.monthIndex]}
          month={month[props.monthIndex]}
          currentYear={props.currentYear}
          previousMonth={previousMonth}
          nextMonth={nextMonth}
          dateSelect={dateSelect}
          setDateSelect={setDateSelect}
          changeToYear={props.changeToYear}
        />
      </div>
    </div>
  )
}


function MonthCard(props) {
  const [value, setValue] = useState(
    moment().locale('pt').month(props.month).year(props.currentYear)
  );

  const [calendar, setCalendar] = useState([]);

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  useEffect(() => {
    setValue(value.year(props.currentYear));
    const startDay = value.clone().startOf('month').startOf('week')
    const endDay = value.clone().endOf('month').endOf('week')
    const day = startDay.clone().subtract(1, 'day')

    const calendarBackUp = [];

    while (day.isBefore(endDay, 'day')) {
      calendarBackUp.push(
        Array(7).fill(0).map(() => day.add(1, 'day').clone())
      )
    }
    setCalendar(calendarBackUp);
  }, [value, props.currentYear])


  return (
    <div className='flex flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <button onClick={props.previousMonth} className='hover:bg-[#ECE0FD] rounded-full p-2 duration-300 cursor-pointer'><LeftArrow /></button>
        <button onClick={props.changeToYear}><p className='font-bold text-[#333333] cursor-pointer flex'>{value.format('MMMM')} {props.currentYear} <ArrowDropDown /></p></button>
        <button onClick={props.nextMonth} className='hover:bg-[#ECE0FD] rounded-full p-2 duration-300 cursor-pointer'><RightArrow /></button>
      </div>

      <div className='px-2'>
        <table className='border-separate border-spacing-y-2'>

          <thead>
            <tr className='font-["Roboto"] text-xs font-normal text-[#666666]'>
              {weekDays.map((value, index) => (
                <th className='tracking-widest w-[40px] h-[32px]' key={index}>{value}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {
              calendar.map((week) => (
                <tr key={week}>
                  {week.map(day => (
                    <DayCard
                      key={day._d.getTime() + props.month}
                      day={day}
                      month={props.month}
                      year={props.currentYear}
                      dateSelect={props.dateSelect}
                      setDateSelect={props.setDateSelect}
                    />
                  ))}
                </tr>
              ))
            }
          </tbody>

        </table>
      </div>
    </div>
  )
}


function DayCard(props) {
  const [state, setState] = useState('');

  const day = props.day._d;

  useEffect(() => {
    const currentMonth = new Date(props.month + ',01,' + props.year);

    if (day.getMonth() !== currentMonth.getMonth()) {
      setState('nonPertenceMonth');
      return;
    }
    if (props.dateSelect.find(value => value.getTime() === day.getTime())) {
      setState('selected');
    } else {
      setState('');
    }
  }, [day, props.month, props.year, props.dateSelect])

  const handleClickDate = () => {
    if (state !== 'nonPertenceMonth')
      if (props.dateSelect.find((value) => value.getTime() === day.getTime())) {
        setState('');
        props.setDateSelect(
          props.dateSelect.filter((value) => value.getTime() !== day.getTime())
        );
      } else {
        setState('selected');
        props.setDateSelect(
          [...props.dateSelect, day]
        )
      }
  }
  return (
    <Days state={state} onClick={handleClickDate} className='text-[#666666] text-center hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50 w-[40px] h-[40px]'>{props.day.format('DD').toString()}</Days>
  )
}