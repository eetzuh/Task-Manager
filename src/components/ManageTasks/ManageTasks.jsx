import React, {useState} from 'react';
import Form from './Form.jsx'

const ManageTasks = ({task, setTask}) => {
    // const [filter, setFilter] = useState();
    const [form, setForm] = useState(false);
    return <div>
        {/* <Filter/> */}
        <button onClick={() =>setForm(prevState => !prevState)}>Dodaj</button>
        <button onClick={()=>console.log(task)}></button>
        <div>
           { form && <Form task={task} setTask={setTask}/> }
        </div>
        <table>
            <thead>
                <th>Naziv</th>
                <th>Status</th>
            </thead>
            <tbody></tbody>
        </table>
    </div>
}

export default ManageTasks;