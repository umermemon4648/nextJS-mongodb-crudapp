import React, {useState, useEffect} from 'react'
import axios from 'axios';
const event = () => {
  const [eventState, setEventState] = useState({
    dateInput: "",
    eventText: "",
    startTime: "",
    endTime: "",
    radioInput: "1 room",
  })


  const getFormData = (e) => {
    e.preventDefault()
    const { name, value } = e.target;
        setEventState({ ...eventState, [name]: value });
  };

  const registerEvent = async(e)=>{
    e.preventDefault()
    const {eventText, dateInput, startTime, endTime} = eventState
    try{

      if(eventText || dateInput || startTime || endTime){
        // const {data} = await axios.post('api/event/new',eventState)
        let res = await fetch('http://localhost:3000/api/event/new',{
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(eventState)
    
        })
        let data = await res.json()

        console.log("data: ", data)
      }

      
    }
    catch(error){
      console.log(error);
    }
  }
  
  useEffect(()=>{

    console.log(eventState)
    // registerEvent()
  },[eventState])



  return (
    <>
      <div>
        <form onSubmit={registerEvent} method='post'>
    <div className='mb-4 mt-4 px-4'>
      <label>Date</label>
      <input onChange={getFormData} value={eventState.dateInput} type="date" name="dateInput" />
    </div>


    <div className='mb-4 px-4'>
      <label>Event</label>
      <input onChange={getFormData} value={eventState.eventText} type="text" name="eventText" />
    </div>


    <div className='mb-4 px-4'>
      <label>Start Time</label>
      <input onChange={getFormData} value={eventState.startTime} type="time" name="startTime" />
    </div>

    
    <div className='mb-4 px-4'>
      <label>End Time</label>
      <input onChange={getFormData} value={eventState.endTime} type="time" name="endTime" />
    </div>
    
    <div className='mb-4 px-4'>

        <ul style={{listStyleType:"none"}} >
        Choose a room
      <li>
        
        <label>
        <input
    onChange={getFormData}
    type="radio"
    name="radioInput"
    className="radio"
    value={eventState.radioInput}
    defaultChecked
  />
          1 room</label
        >
      </li>
      <li>
        <label>
        <input
    onChange={getFormData}
    type="radio"
    name="radioInput"
    className="radio"
    value={eventState.radioInput}
  />
            2 room</label
        >
      </li>
      </ul>
    </div>



<div>
  <button  type="submit">Submit</button>
</div>

    </form>
    </div>
  </>
  )
}

export default event
