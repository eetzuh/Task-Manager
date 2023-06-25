import React from 'react';

const DeleteBtn = ({task, setTask, itemId, setDeletedTask}) => {

    const removeTask= ()=>{ 
        setDeletedTask(previous=>[...previous, task.filter((item)=> item.id==itemId)])
        setTask((current) => current.filter((item)=> item.id!==itemId))
    }
    return <>
        <button id={itemId} onClick={removeTask}>Ukloni</button>
    </>
}

export default DeleteBtn;