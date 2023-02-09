import React from 'react'
import { useState } from 'react'

let inp;
const StateUse = () => {
  let [Todo,TodoList]=useState([""]);
  let [text,setText]=useState('');
    
let inputHandler = (event)=>
{
     setText(event.target.value);
}

const Change = ()=>
{ 
    TodoList([...Todo,text]);   
    setText('');
}

    return (
           <>        
<input type="text" onChange={inputHandler} value={text}/>
<button onClick={Change} disabled={text === ''}>Add</button>
      <div>
        {
          Todo.map((x,ind)=>{
           return(
            <>   
              
              {ind!=0 &&
                <li>{x}</li>
              }
             
            </>

           )
          })
        }
      </div>

  </>
  )
}

export default StateUse