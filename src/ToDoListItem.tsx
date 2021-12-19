import { removeListener } from 'cluster';
import React from 'react';
import "./styles/App.css";
interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo;
}


const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <li>
            <label
                style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
            >
                <div className="list">
                <input 
                    type="checkbox"
                    checked={todo.complete}
                    onClick={() => {
                        toggleTodo(todo)
                    }}
                    />{' '}
                {todo.text}
                   
                </div>
                
            </label>
        </li>
    )
};

export default TodoListItem;