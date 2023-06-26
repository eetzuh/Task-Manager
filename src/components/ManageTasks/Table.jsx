import React, { useState } from 'react';
import DeleteBtn from './Buttons/DeleteBtn';
import EditBtn from './Buttons/EditBtn';

const Table = ({ task, setEditForm, dispatch}) => {
    const [deletedTask, setDeletedTask] = useState([]);
    return <table>
        <thead>
            <tr>
                <th>Naziv</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {task.map((item) => <>
                <tr key={item.id}>
                    <td>{item.Naziv}</td>
                    <td>{item.status}</td>
                    <td>
                        <DeleteBtn task={task} taskId={item.id} dispatch={dispatch} setDeletedTask={setDeletedTask} />
                    </td>
                    <td>
                        <EditBtn task={task} taskId={item.id} setEditForm={setEditForm} />
                    </td>
                </tr>
            </>)}
        </tbody>
    </table>
}

export default Table;