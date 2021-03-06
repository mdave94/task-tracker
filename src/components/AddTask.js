import { useState } from "react"


const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)

    // Submit the form
    const onSubmit = (e)=> {
        e.preventDefault()
        

        if(!text){
            alert('Pleade add a task')
            return
        }

        onAdd({text,day,reminder})
        //set bacj to  default        
        setText('')
        setDay('')
        setReminder(false)

    }

  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>TASK</label>
            <input type='text' placeholder="Add Task" value={text}
            onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Day&Time</label>
            <input type='text' placeholder="Add Day&Time" value={day}
            onChange={(e)=>setDay(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>SET REMINDER</label>
            <input type='checkbox' value={reminder}
            onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>
        <input type="submit" className="btn btn-block" value="Save Task"/>
    </form>
  )
}

export default AddTask
