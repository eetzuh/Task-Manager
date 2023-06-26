import { useState, useReducer } from 'react'
import TaskShow from './components/Tasks/TaskShow.jsx'
import ManageTasks from './components/ManageTasks/ManageTasks.jsx';
import styles from './App.module.scss';

function App() {

  const taskCol = [
    {
      status: 'wishlist'
    },
    {
      status: 'to_do',
    },
    {
      status: 'in_progress',
    },
    {
      status: 'done',
    },
  ]

  const titleName = (statusName) => {
    return statusName.charAt(0).toUpperCase() + statusName.slice(1).replace('_', ' ');
  };

  taskCol.forEach((task) => {
    if (!task.title) {
      task.title = titleName(task.status);
    }
  });

  const taskItems = {
    id: '',
    Naziv: 'Bez naziva',
    Opis: 'Bez opisa',
    status: 'Wishlist'
  }

  const [page, setPage] = useState('pocetna');

  const initialSate = []
  function reducer(state, action) {
    switch (action.type) {
      case 'add_task':
        return [...state, action.payload];
      case 'edit_task':
        return state.map((item, index) =>
          index == action.id ? action.payload : item
        )
      case 'delete_task':
        return state.filter((item, index) => index !== action.id)
    }
  }
  const [state, dispatch] = useReducer(reducer, initialSate)


  return (
    <>
      <div className={styles.nav_container}>
        <a onClick={() => setPage(prevState => prevState == 'pocetna' ? 'upravljanje' : 'pocetna')}>
          {page == 'pocetna' ? "Početna" : "Upravljanje taskovima"}
        </a>
      </div>
      <div className={styles.bodyContainer}>
        {page == 'pocetna' ? <TaskShow taskCol={taskCol} task={state} />
          : <ManageTasks taskCol={taskCol} taskItems={taskItems} task={state} dispatch={dispatch} />}
      </div>
    </>
  )
}

export default App
