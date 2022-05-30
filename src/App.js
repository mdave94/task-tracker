import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([
    {id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:30',
        reminder: true
   
       },
       {
           id:2,
           text:'Meeting',
           day: 'Feb 6th at 1:31pm '
       }
    ])


  //Delete Task
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>task.id!== id))
  }


  //Reminder function
  const toggleReminder = (id) =>{
    setTasks(
              tasks.map(
                (task)=>task.id === id ? {...task,reminder: !task.reminder}: task))
  }


//Add Task
const addTask = (task) =>{
  console.log(task);
}


  return (
   <div className='container'>
      <Header  onAdd={()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
    
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask} 
      onToggle={toggleReminder}/>) : ('No tasks to Show')}
      
    </div>
  );
}

export default App;
