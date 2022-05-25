import React, { useState,useEffect} from 'react';
import TodoList from '../Todolists/Todolists';


function InputField(props) {
 
  const [todoList, setTodoList] = useState(()=>{
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [addTodo, setTodo] = useState("");

  // Remove Data functionality 
  const removeData =(index)=>{
    const newTodos = [...todoList];
    newTodos.splice(index,1);
    setTodoList(newTodos);
   
  };

  // Edit data functionality
  const editData= (index)=>{

    const newTodos = todoList[index];
    setTodo(newTodos);
  
  }

  const submitChanges = (e) => {
    e.preventDefault();
    
    setTodoList([...todoList,addTodo]);
    setTodo("");
  }
  

  useEffect(()=>{
    localStorage.setItem("todoList",JSON.stringify(todoList));
  },[todoList]
  );
  

  return (
    <div className='Inp-Container'>
      <form className='task-Container' onSubmit={submitChanges}>
        <input 
          className='inp-field' 
          type={props.type} 
          placeholder={props.placeholder} 
          onChange={(e) => setTodo(e.target.value)} 
          value={addTodo} required/>
        <button className='Add-btn'>Add Task</button>
      </form>
      
      <TodoList list = {todoList} removeData={removeData} editData={editData}/>
    </div>
  );
}

export default InputField;