import React, { useState } from 'react';
import DeleteBtn from './DeleteBtn';

const Table = ({ task, setTask }) => {
    const [deletedTask, setDeletedTask]= useState([]);
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
                        <DeleteBtn task={task} setTask={setTask} itemId={item.id} deletedTask={deletedTask} setDeletedTask={setDeletedTask}/>
                    </td>
                </tr>
            </>)}
        </tbody>
    </table>
}

export default Table;