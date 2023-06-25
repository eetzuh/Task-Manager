import { useState } from 'react'
import TaskShow from './components/Tasks/TaskShow.jsx'
import ManageTasks from './components/ManageTasks/ManageTasks.jsx';
import styles from './App.module.scss';

function App() {

  const taskCol = [
    {
      status:'wishlist'
    },
    {
      status:'to_do',
    },
    {
      status:'in_progress',
    },
    {
      status:'done',
    },
  ]
  
  const titleName = (statusName) => {
    return statusName.charAt(0).toUpperCase()+statusName.slice(1).replace('_', ' ');
  };
  
  taskCol.forEach((task) => {
    if (!task.title) {
      task.title = titleName(task.status);
    }
  });

  const taskItems ={
    id:'',
    Naziv:'Bez naziva',
    Opis:'Bez opisa',
    status:'Wishlist'
  }

  const [page, setPage] = useState('pocetna');
  const [task, setTask] = useState([]);
 
  return (
    <>
      <div className={styles.nav_container}>
        <a onClick={() => setPage (prevState => prevState == 'pocetna' ? 'upravljanje' : 'pocetna')}>
          {page == 'pocetna' ? "Početna" : "Upravljanje taskovima"}
        </a>
      </div>
      <div className={styles.bodyContainer}> 
        { page == 'pocetna' ? <TaskShow taskCol={taskCol} task={task}/>
         : <ManageTasks task={task} setTask={setTask} taskCol={taskCol} taskItems={taskItems}/>}
      </div>
    </>
  )
}

export default App
