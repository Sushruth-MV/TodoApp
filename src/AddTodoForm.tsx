import React, { useState } from 'react';
import "./styles/AddTodoForm.css";
interface Props {
    addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');

    return (
        <form >
            
            <div className="inputContainer">
                
            <input 
                type="text"
                value={text}
                onChange={e => {
                    setText(e.target.value);
                }}
            />
            <button 
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    addTodo(text);
                    setText('');
                    
                }}
                
            >
                Add Task
            </button>
            </div>
        </form>
    );
};

export default AddTodoForm;