import React, { useState, useEffect } from 'react';
import TodoList from '../Todolists/Todolists';


function InputField(props) {

  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  // Remove Data functionality 
  const removeData = (index) => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);

  };

  // Edit data functionality
  const editData = (index) => {
    const newTodos = todoList[index];
    setTodo(newTodos);
    setEditIndex(index);
  }

  // console.log('index edit :>> ', todo);

  const submitChanges = (e) => {
    e.preventDefault();

    if (editIndex > 0 || editIndex >= 0) {
      todoList[editIndex] = todo;
      setTodoList([...todoList])
      setTodo("");

    } else {
      setTodoList([...todoList, todo]);
      setTodo("");
    }
    setEditIndex(-1);
  }


  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]
  );


  return (
    <div className='Inp-Container'>
      <form className='task-Container' onSubmit={submitChanges}>

        <input
          className='inp-field'
          type={props.type}
          placeholder={props.placeholder}
          onChange={(e) => setTodo(e.target.value)}
          value={todo} required />
        <button className='Add-btn'>{editIndex > -1 ? "Update Task" : "Add task"}</button>
      </form>

      {
        todoList.length > 0 ?
          (<TodoList
            list={todoList}
            removeData={removeData}
            editData={editData} />) :
          (<p className='added-task'>No task to show</p>)
      }
    </div>
  );
}

export default InputField;