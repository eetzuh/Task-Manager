import React, { useState } from 'react';
import Form from './Form.jsx'
import Table from './Table.jsx'

const ManageTasks = ({ task, setTask, taskCol, taskItems }) => {
    const [form, setForm] = useState(false);
    const [taskId, setTaskId] = useState(0);

    const handleForm = () => {
        setForm(prevState => !prevState)
    }
    return <div>
        <button onClick={handleForm}>Dodaj</button>
        <div>
            {form && <Form taskId={taskId}  setTaskId={setTaskId} setTask={setTask} taskCol={taskCol} taskItems={taskItems} handleForm={handleForm} />}
        </div>
        <Table task={task} setTask={setTask} />
    </div>
}

export default ManageTasks;