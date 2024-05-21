import './Count.css';
import { useState } from "react";
function Count(){
   
    const [x,setX] = useState(0);
    
    return(

        <div className='box'>

      <div className='num'>  {x}
      </div>
   <button onClick={()=>{setX(x+1)}}>Incement</button>
   <button onClick={()=>{setX(x-1)}}>Decrement</button>
        </div>
    )

    
}
export default Count;