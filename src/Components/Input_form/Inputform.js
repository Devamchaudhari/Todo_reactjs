import React, { useState,useEffect} from 'react';


function InputField(props) {
    const [addtodo, settodo] = useState("");

    useEffect(() => {
        console.log('input value :>> ', addtodo);
      });
    return ( 
        <div className='Inp-Container'>
                <input className='inp-field' type={props.type} placeholder={props.placeholder} onChange = {() => settodo(addtodo)}></input>
                <button className='Add-btn' onClick={()=>console.log("click")}>Add Task</button>
        </div>
     );
}

export default InputField;