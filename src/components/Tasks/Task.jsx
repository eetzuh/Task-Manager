import React from 'react';
import styles from './TaskStatus.module.scss';

const Task = () => {
    return <div className={styles.container}>
        <div className={`${styles.taskContainer} ${styles[status]}`}>
            {title}
        </div>
    </div>
}

export default TaskStatus;