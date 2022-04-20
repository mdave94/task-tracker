import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react"


function App() {

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
    console.log('DELETE TASK',id);
  }




  return (
   <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete = {deleteTask}/>
    </div>
  );
}

export default App;
