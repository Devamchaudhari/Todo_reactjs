
import { TrashCanIcon, EditIcon, UncheckedIcon } from "../Icons/Icons";
function TodoList(props) {

    return (
        <div className="task-container">
            <ul className='list-container'>
                {
                    props.list.map((addTodo, index) => (
                        <li key={index} className="added-task"><button className='uncheck-btn'><UncheckedIcon className="uncheck-icon" /> {addTodo}</button>
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