import React from 'react';

const Input = ({label, placeholder, task, setTask}) => {
    const handleInput = (e)=> {
        setTask({...task, [e.target.id]:e.target.value})
    }
        return <div>
            <label htmlFor={label}>{label}</label>
            <input type='text' id={label} placeholder={placeholder} onChange={handleInput} value={task[label]}/>
            <p>{task[label]}</p>
        </div>       
}

export default Input;