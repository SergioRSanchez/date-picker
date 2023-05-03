import { ReactComponent as LeftArrow } from './assets/left-arrow.svg';
import { ReactComponent as RightArrow } from './assets/right-arrow.svg';

export function Year(props) {
  return (
    <>
      <div className='py-8 px-6 bg-[#FFFFFF] flex flex-col gap-4 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.16)]'>

        <div className='flex items-center justify-between'>
          <button onClick={() => props.setCurrentYear(props.currentYear - 1)} className='hover:bg-[#ECE0FD] rounded-full p-2 duration-300 cursor-pointer'><LeftArrow /></button>
          <button onClick={props.changeToMonth}><p className='font-bold text-[#333333] cursor-pointer'>{props.currentYear}</p></button>
          <button onClick={() => props.setCurrentYear(props.currentYear + 1)} className='hover:bg-[#ECE0FD] rounded-full p-2 duration-300 cursor-pointer'><RightArrow /></button>
        </div>

        <div className='flex flex-col gap-4 px-2'>
          <div className='flex justify-between gap-[17px]'>
            <button onClick={props.changeToMonth}><p onClick={() => props.setMonthIndex(0)} className='text-[#666666] py-3 px-7 hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50'>Jan</p></button>
            <button onClick={props.changeToMonth}><p onClick={() => props.setMonthIndex(1)} className='text-[#666666] py-3 px-7 hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50'>Fev</p></button>
            <button onClick={props.changeToMonth}><p onClick={() => props.setMonthIndex(2)} className='text-[#666666] py-3 px-7 hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50'>Mar</p></button>
          </div>

          <div className='flex justify-between gap-[17px]'>
            <button onClick={props.changeToMonth}><p onClick={() => props.setMonthIndex(3)} className='text-[#666666] py-3 px-7 hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50 '>Abr</p></button>
            <button onClick={props.changeToMonth}><p onClick={() => props.setMonthIndex(4)} className='text-[#666666] py-3 px-7 hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50'>Mai</p></button>
            <button onClick={props.changeToMonth}><p onClick={() => props.setMonthIndex(5)} className='text-[#666666] py-3 px-7 hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50'>Jun</p></button>
          </div>

          <div className='flex justify-between gap-[17px]'>
            <button onClick={props.changeToMonth}><p onClick={() => props.setMonthIndex(6)} className='text-[#666666] py-3 px-7 hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50 '>Jul</p></button>
            <button onClick={props.changeToMonth}><p onClick={() => props.setMonthIndex(7)} className='text-[#666666] py-3 px-7 hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50'>Ago</p></button>
            <button onClick={props.changeToMonth}><p onClick={() => props.setMonthIndex(8)} className='text-[#666666] py-3 px-7 hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50'>Set</p></button>
          </div>

          <div className='flex justify-between gap-[17px]'>
            <button onClick={props.changeToMonth}><p onClick={() => props.setMonthIndex(9)} className='text-[#666666] py-3 px-7 hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50 '>Out</p></button>
            <button onClick={props.changeToMonth}><p onClick={() => props.setMonthIndex(10)} className='text-[#666666] py-3 px-7 hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50'>Nov</p></button>
            <button onClick={props.changeToMonth}><p onClick={() => props.setMonthIndex(11)} className='text-[#666666] py-3 px-7 hover:bg-[#ECE0FD] rounded-lg cursor-pointer duration-300 disabled:opacity-50'>Dez</p></button>
          </div>
        </div>
      </div>
    </>
  )
}