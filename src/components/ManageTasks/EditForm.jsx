import React, { useReducer } from 'react';

const EditForm = ({ }) => {
    const editNewTask= () => {
        dispatch({type:'edit_task', id:2, payload:'EDITED'})
    }
    return <div>
        <form>
        
        </form>
    </div>
}

export default EditForm;