import { useState } from 'react'
import TaskStatus from './components/Tasks/TaskStatus.jsx'
import ManageTasks from './components/ManageTasks/ManageTasks.jsx';
import styles from './App.module.scss';

function App() {
  const taskCol = [
    {
      status:'wishlist',
      title: 'Wishlist'
    },
    {
      status:'to_do',
      title: 'To do'
    },
    {
      status:'in_progress',
      title: 'In progress'
    },
    {
      status:'done',
      title: 'Done'
    },
  ]

  const [page, setPage] = useState('pocetna');
  const [task, setTask] = useState({
    Naziv:'',
    Opis:''
  });
  return (
    <>
      <div className={styles.nav_container}>
        <a onClick={() => setPage (prevState => prevState == 'pocetna' ? 'upravljanje' : 'pocetna')}>
          {page == 'pocetna' ? "Početna" : "Upravljanje taskovima"}
        </a>
      </div>
      <div className={styles.tasksContainer}> 
        { page == 'pocetna' ?
         taskCol.map((item) => <TaskStatus status={item.status} title={item.title} task={task} setTask={setTask}/>) 
         : <ManageTasks task={task} setTask={setTask}/>}
      </div>
    </>
  )
}

export default App
