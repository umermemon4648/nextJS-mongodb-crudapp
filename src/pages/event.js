import React, {useState, useEffect} from 'react'

const event = () => {
  const [eventState, setEventState] = useState[{
    dateInput,
    eventText,
    startTime,
    endTime,
    radioInput,
  }]


  useEffect(()=>{

    
  },[eventState])



  return (
    <>
      
    <div className='mb-4 mt-4 px-4'>
      <label>Date</label>
      <input type="date" name="dateInput" />
    </div>


    <div className='mb-4 px-4'>
      <label>Event</label>
      <input type="text" name="eventText" />
    </div>


    <div className='mb-4 px-4'>
      <label>Start Time</label>
      <input type="time" name="startTime" />
    </div>

    
    <div className='mb-4 px-4'>
      <label>End Time</label>
      <input type="time" name="endTime" />
    </div>
    
    <div className='mb-4 px-4'>

        <ul style={{listStyleType:"none"}} >
        Choose a room
      <li>
        
        <label><input

            name="radioInput"
            type="radio"
            className="radio"
            defaultChecked/>
          1 room</label
        >
      </li>
      <li>
        <label><input
            name="radioInput"
            type="radio"
            className="radio"/>
            2 room</label
        >
      </li>
      </ul>
      
    </div>

  </>
  )
}

export default event
