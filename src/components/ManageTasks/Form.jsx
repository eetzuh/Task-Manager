import React from 'react';
import Input from './Input';
import Select from './Select'

const Form = ({ taskId, setTaskId, setTask, taskCol, taskItems, handleForm }) => {

    const inputInfo = [
        {
            label: 'Naziv',
            placeholder: 'Unesi naziv'
        },
        {
            label: 'Opis',
            placeholder: 'Unesi opis'
        },
    ]

    const addTask = () => {
        setTaskId(taskId + 1)
        taskItems.id=taskId
        setTask(prevTask => [...prevTask, taskItems])
        handleForm()
    }

    return <form>
        {inputInfo.map((item, index) =>
            <Input key={index} label={item.label} placeholder={item.placeholder} taskItems={taskItems} />
        )}
        <Select taskCol={taskCol} taskItems={taskItems} />
        <button type='button' onClick={addTask}>Dodaj task</button>
    </form>
}

export default Form;