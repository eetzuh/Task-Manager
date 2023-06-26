import React from 'react';

const EditBtn = ({ taskId, task, setEditForm }) => {
    const handleEditForm = () => {
        setEditForm(prevState => !prevState)
    }
    return <div>
        <button onClick={handleEditForm}></button>
    </div>
}

export default EditBtn;