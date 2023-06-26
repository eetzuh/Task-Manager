import React from 'react';

const DeleteBtn = ({ task, taskId, setDeletedTask, dispatch}) => {

    const removeTask = () => {
        setDeletedTask(previous => [...previous, task.filter((item) => item.id == taskId)])
        dispatch({type:'delete_task', id:taskId})
    }
    return <>
        <button id={taskId} onClick={removeTask}>Ukloni</button>
    </>
}

export default DeleteBtn;