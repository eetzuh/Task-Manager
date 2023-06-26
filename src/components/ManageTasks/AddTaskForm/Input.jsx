import React from 'react';

const Input = ({ label, placeholder, taskItems }) => {

    const handleInput = (e) => {
        if (e.target.value.length > 0) {
            taskItems[e.target.id] = e.target.value
        } else {
            taskItems[e.target.id] = 'Bez ' + e.target.id.toLowerCase() + 'a';
        }
    }
    return <div>
        <label htmlFor={label}>{label}</label>
        <input type='text' id={label} placeholder={placeholder} onChange={handleInput} />
    </div>
}

export default Input;