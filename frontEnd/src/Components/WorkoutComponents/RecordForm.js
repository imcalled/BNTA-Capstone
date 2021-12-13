import React from 'react'
import { useState } from 'react/cjs/react.development'

const RecordForm = () => {

    const[time, setTime] = useState(0);
    const[distance, setDistance] = useState(0)

            
    const handleTimeChange = (event) => {

        setTime(event.target.value)
  
        console.log(event.target.value);
        
          
      }
  
     
  
      const handleDistanceChange = (event) => {
  
          setDistance(event.target.value)
  
          console.log(event.target.value)
  
      }

    return (
        <>
            <h1>Record</h1>

            <form>
                <div>
                    <label>Time: </label>
                    <input type="text" placeholder="Time Achieved" onChange={handleTimeChange}/>
                </div>

                <div>
                    <label>Distance: </label>
                    <input type="text" placeholder="Distance Achieved" onChange={handleDistanceChange}/>
                </div>
            </form>
        </>
    )
}

export default RecordForm;
