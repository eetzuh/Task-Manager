import React, {useState} from 'react';
import Input from './Input';

const Form = ({task, setTask}) => {
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
    return <form>
        {inputInfo.map((item)=> <Input label={item.label} 
        placeholder={item.placeholder} task={task}
        setTask={setTask}/>)}
        <button>Dodaj task</button>
    </form>
}

export default Form;