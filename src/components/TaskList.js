import React from 'react';
import TaskItem from "./TaskItem";

function TaskList({tasks, status, changeStatus, removeTask}) {
    return (
        <ul className='checklist'>
            {tasks
                .filter((task) => status === 'all' ? task : task.status === status)
                .map((task) => <TaskItem key={task.id} task={task} changeStatus={changeStatus} removeTask={removeTask}/>)}
        </ul>
    );
}

export default TaskList;