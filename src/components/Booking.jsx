import React, { useState } from 'react'

import {FaPlus} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import store from '../Redux/store'
import { makeBooking } from '../Redux/actions'

const  Booking = () => {
  const data =useSelector((state)=>state.data)
  const dispatch = useDispatch()
  const size = data.length
  const [bookingData, setbookingData] = useState({})
const handleChange = (e) =>{
  console.log(e.target.value);
  const newBookingData = {...bookingData};
  newBookingData[e.target.name] = e.target.value
  setbookingData(newBookingData)
}

const handleBook =(e) =>{
    e.preventDefault() 
    // console.log(e.target.value);
    if(Object.keys(bookingData).length === 5){
      dispatch(makeBooking({...bookingData,id:size + 1}))

    }else{
      alert("please select data property!")
    }

}
console.log(bookingData);

  return (
    <div className='md:mt-[160px] mt-[100px] md:ml-[190px] mx-4 relative'>
         <div className='bg-white rounded-md max-w-6xl w-full max-auto'>
         <form className='flex flex-col md:flex-row '>

      {/*from*/}
   <div className='py-1.5 px-2.5 flex-1 border-r-2'>
    <p>Destination From</p>
   <div>
    <select required onChange={(e) => handleChange(e)} name="from" id="from" className='outline-none p-2 w-full' >
    <option value="">Please Select</option>
    <option>Eiffel Tower</option>
    <option>Louis Vuitton Foundation</option>
    <option>Louvre Museum</option>
   </select>

</div>
    </div>

    {/*destinagtion to*/}
   <div className='py-1.5 px-2.5 flex-1 border-r-2'>
    <p>Destination To</p>
   <div>
  <select name="to" id="to" onChange={(e)=> handleChange(e)} className='outline-none p-2 w-full'>
    <option value="">Please Select</option>
    <option>Eiffel Tower</option>
    <option>Louis Vuitton Foundation</option>
    <option>Louvre Museum</option>
  </select>

</div>
  </div>

     {/*date*/}

  <div className='py-1.5 px-2.5 flex-1 border-r-2'>
    <p>Journey Date</p>

    <input type="date" name='date' required onChange={(e)=> handleChange(e)} className='outline-none p-2 w-full' />

  </div>


  {/* Guests Options*/ }

  <div className='py-1.5 px-2.5 flex-1 border-r-2'>
    <p>Guests </p>

    <div>
  <select name="guests" id="guests" onChange={(e) => handleChange(e)} className='outline-none p-2 w-full'>
    <option value="">Please Select</option>
    <option>1 Person</option>
    <option>2 Persons</option>
    <option>3 Persons</option>
  </select>

</div>

  </div>


     {/*Travel Class*/}

     <div className='py-1.5 px-2.5 flex-1 border-r-2'>
    <p>Travel Class</p>
    <div>
  <select name="TicketClassName" id="TicketClassName" onChange={(e)=>handleChange(e)} className='outline-none p-2 w-full'>
    <option value="">Please Select</option>
    <option>Economy</option>
    <option>Business</option>
    <option>Billionairs</option>
    
  </select>
</div>
    
  </div>

    {/*Travel Class*/}

    <button type='submit' className='bg-indigo-800 w-[150px] text-white py-1 space-x-2 text-center flex items-center justify-center' ><FaPlus className='mr-2'/>Book Now</button>
  
</form>

    </div>
    </div>
  )
}

export default Booking
