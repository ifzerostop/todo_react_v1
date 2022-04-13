import React from 'react';

function TaskInput({value, handleInput, handleAddTask}) {
    return (
        <p>
            <span className='input'>
        <input
               type="text"
               value={value}
               placeholder="   Co dziś robimy szefie?"
               onChange={handleInput}
               onKeyUp={handleAddTask}
        />
                <span></span>
            </span>
        </p>
    );
}

export default TaskInput;