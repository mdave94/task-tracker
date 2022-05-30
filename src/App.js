import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState()


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
