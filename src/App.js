 import Header  from "./components/Header";
 import Task from "./components/Task";
 import { useState } from 'react'
 import AddTask from "./components/AddTask";

 

function App() {
  const [tasks, setTasks] = useState ([
      
    {
        id: 1,
        text: 'Html Project',
        day: 'Monday - Wednesday at 9-11',
        reminder: true,
    },
    {
        id: 2,
        text: 'Bootstrap Project',
        day: 'Monday - Friday at 11-1',
        reminder: true,
    },
    {
        id: 3,
        text: 'Php Project',
        day: 'Monday - Saturday at 2-4',
        reminder: false,
    },
    
    
])

// Delete Task 

const deletetask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id  ))

}
// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map( (task) => task.id === id ? {...task, reminder: !task.reminder} : task))

}
  return (
    <div className="container">
      <header className="App-header">
       <Header/>
       <AddTask />
       <Task tasks={tasks} onDelete={deletetask} onToggle={toggleReminder}/>
      </header>
     
    </div> 
  ); 
}

export default App;
