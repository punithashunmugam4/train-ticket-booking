import { useState } from 'react';
import './App.css';
import Seats from './components/seats';

function App() {
  const seats=[];
  for(let i=1;i<=80;i++){
    seats.push(i);
  }
  // Assumed already filled seat as 10
  const [filled,setFilled]=useState([1,2,3,4,5,6,7,8,9,10]);
  const [seatCount,setSeatCount]=useState("");
  const [booked,setBooked]=useState(false);

  const handleSubmit=(e)=>{
    console.log(filled)
    e.preventDefault();
    // a person can only book minimum 7 seats at a time
    if(seatCount<=7){
    const temp=seatCount;
    let arr=filled;
    const n=filled.length;
    // seats filled in order, only after filling the row bookings are allowed for next row
    for(let i=1;i<=temp;i++){
      arr.push(i+n)
    }
    setFilled(arr)
    setBooked(true);
  }
  }
  return (
    <div className="App">
      <form>
        <label htmlFor='seats-needed'>Number of seats needed: </label>
        <input name='seats-neaded' type='number' max='7' onChange={(e)=>setSeatCount(e.target.value)}></input>
        <button type='submit' onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
      { booked && <Seats seats={seats} filled={filled}/>}
    </div>
  );
}

export default App;
