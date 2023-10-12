import React, {useState} from 'react'
import axiosbaseurl from './axiosbaseurl'

function AddTaskForm() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const sendTask = () => {
        axiosbaseurl.post("postTask", { title: title, content: content })
            .then((res) => {
                res.data === "error" ? alert("Something went wrong, try again later!") : alert("Task Added Successfully!")
            })
    }

    return (
        <>
            <form className='w-50'>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="text" className="form-control m-4" style={{fontSize: '1.2rem'}} onChange={(e) => setTitle(e.target.value)} id="inputTitle" placeholder="Task Title" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="text" className="form-control m-4" style={{fontSize: '1.2rem'}} onChange={(e) => setContent(e.target.value)} id="inputPassword3" placeholder="Task Information" />
                    </div>
                </div>
                
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" onClick={sendTask} className="btn btn-success m-4">Add Task</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddTaskForm
