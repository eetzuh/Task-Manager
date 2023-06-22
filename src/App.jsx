import { useState } from 'react'
import TaskStatus from './components/Tasks/TaskStatus.jsx'
import styles from './App.module.scss';

function App() {
 
  const navLinks = [
    {
        title: "Početna",
        link: '#'
    },
    {
        title: "Upravljanje taskovima",
        link: "#"
    }
  ]

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

  return (
    <>
      <div className={styles.nav_container}>
       { navLinks.map((item, index) => <a href={item.link} key={item.title+index}>{item.title}</a>)}
      </div>
      <div className={styles.tasksContainer}> 
        {taskCol.map((item) => <TaskStatus status={item.status} title={item.title}/>)}
      </div>
    </>
  )
}

export default App
