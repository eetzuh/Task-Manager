import React from 'react';
import styles from './TaskStatus.module.scss';

const TaskShow = ({ taskCol, task }) => {
    return <div className={styles.container}>
        <div className={styles.taskContainer}>
            {taskCol.map((item) => <>
                <div key={item.status}>
                    <p className={styles[item.status]}>{item.title}</p>
                    {task.filter((task) => { return task.status == item.title }).
                        map((task) => {
                            return <>
                                <div>
                                    <h3>{task.Naziv}</h3>
                                    <p>{task.Opis}</p>
                                </div>
                            </>
                        })
                    }
                </div>
            </>)}
        </div>
    </div>
}

export default TaskShow;