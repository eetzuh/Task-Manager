import React, { useState } from 'react';
import Form from './AddTaskForm/Form.jsx'
import EditForm from './EditForm.jsx';
import Table from './Table.jsx'

const ManageTasks = ({ task, setTask, taskCol, taskItems, dispatch }) => {
    const [form, setForm] = useState(false);
    const [editForm, setEditForm] = useState(false);
    const [taskId, setTaskId] = useState(0);

    const handleForm = () => {
        setForm(prevState => !prevState)
    }

    return <div>
        <button onClick={handleForm}>Dodaj</button>
        <div>
            {form && <Form dispatch={dispatch} taskId={taskId} setTaskId={setTaskId} taskCol={taskCol} taskItems={taskItems} handleForm={handleForm}/>}
        </div>
        <div>
           {editForm && <EditForm setEditForm={setEditForm}/>}
        </div>
        <Table task={task} setEditForm={setEditForm} dispatch={dispatch}/>
    </div>
}

export default ManageTasks;