import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState,useEffect} from "react";
import AddTask from "./components/AddTask";
//import { wait } from "@testing-library/user-event/dist/utils";


function App() {
  const [showAddTask,setShowAddTask] = useState(false)
  const [tasks,setTasks] = useState([])

  useEffect(()=> {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)

    }

  
    getTasks()
  }, [] )

  const fetchTasks = async () => {
    // important at prod
    const res = await fetch('http://localhost:5000/tasks')
    
    const data = await res.json()

    return data
  }

  const fetchTask = async (id) => {
    // important at prod
    const taskURL = 'http://localhost:5000/tasks/'
    const res = await fetch(taskURL+id)
    const data = await res.json()

    return data
  }
  
  
  //Delete Task
  const deleteTask = async (id)=>{
    const urlToDelete = "http://localhost:5000/tasks/"+id
    await fetch(urlToDelete,{
      method:'DELETE'
    })


    setTasks(tasks.filter((task)=>task.id!== id))
  }


  //Reminder function
  const toggleReminder = async (id) =>{
    const reminderUpdateURL = 'http://localhost:5000/tasks/'
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle,reminder: !taskToToggle.reminder}
   

    const res = await fetch(reminderUpdateURL+id,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(
      tasks.map((task)=>
        task.id === id ? {...task,reminder: data.reminder} : task))
  }


//Add Task
const addTask = async (task) =>{
  const urlToAdd = "http://localhost:5000/tasks/"
  
  const res = await fetch(urlToAdd,
    {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body:JSON.stringify(task)
    })

    const data = await  res.json()
    
    // add the current tasks list and add the new one
    setTasks([...tasks,data])

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
