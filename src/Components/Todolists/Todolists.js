import React, { useState} from 'react';
import { TrashCanIcon, EditIcon, UncheckedIcon, CheckIcon } from "../Icons/Icons";
function TodoList(props) {
     const [checkedArr,setCheckedArr]= useState([]);
    const handleCheck =(index)=>{
        if (checkedArr.indexOf(index)>-1) {
            console.log('if index :>> ', index);
            let newArr= [...checkedArr];
            newArr.splice(index,1);
            setCheckedArr(newArr);
        } else {
            console.log('else index :>> ', index);
            setCheckedArr([...checkedArr,index]);
        }
    }   
     return (
        <div className="task-container">
            <ul className='list-container'>
                {
                    props.list.map((addTodo, index) => (
                        <li key={index} className="added-task">
                            <button className='uncheck-btn' onClick={() => handleCheck(`${index}`)}>
                                { checkedArr.indexOf(`${index}`)>-1 ?
                                    <CheckIcon className="uncheck-icon" /> :
                                    <UncheckedIcon className="uncheck-icon" /> 
                                }
                                {addTodo}
                            </button>
                            <div className="edit-del-wraper">
                                <button className='delete-btn' onClick={() => props.removeData(index)}><TrashCanIcon className="delete-icon" /></button>
                                <button className="Edit-btn" onClick={() => props.editData(index)}><EditIcon className="Edit-icon" /></button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;