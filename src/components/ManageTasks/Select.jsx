import React from 'react';

const Select = ({ taskCol, taskItems }) => {

    const handleSelect = (e) => {
        taskItems.status = e.target.value
    }
    return <>
        <select onChange={handleSelect}>
            {taskCol.map((item, index) => <option value={item.title} key={index}>{item.title}</option>)}
        </select>
    </>
}

export default Select;