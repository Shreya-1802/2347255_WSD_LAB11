import React, {useState} from 'react'
import axiosbaseurl from './axiosbaseurl'

function AddNoteForm() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const sendNote = () => {
        axiosbaseurl.post("postNote", { title: title, content: content })
            .then((res) => {
                res.data === "error" ? alert("Something went wrong, try again later!") : alert("Note Added Successfully!")
            })
    }

    return (
        <>
            <form className='w-50'>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="text" className="form-control m-4" style={{fontSize: '1.2rem'}} onChange={(e) => setTitle(e.target.value)} id="inputTitle" placeholder="Note Title" />
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <input type="text" className="form-control m-4" style={{fontSize: '1.2rem'}} onChange={(e) => setContent(e.target.value)} id="inputPassword3" placeholder="Note Content" />
                    </div>
                </div>
                
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="submit" onClick={sendNote} className="btn btn-success m-4">Add Note</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddNoteForm
