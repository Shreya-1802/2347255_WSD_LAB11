import React from 'react'
import axiosbaseurl from '../components/axiosbaseurl'

function NoteCard({id, title, content, date}) {

    const deleteNote = () => {
        axiosbaseurl.post("deleteNote", {id: id})
            .then((res) => {
                res.data === "error" ? alert("Something went wrong, try again later!") : alert("Note Deleted Successfully!")
            })
    }

    return (
        <>
            <div className="card m-5" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontWeight: 'bolder'}}>{title}</h5>
                        <p className="card-text text-start m-2" style={{fontSize: '.7rem'}}>Date: {date}</p>
                        <p className="card-text text-start">{content}</p>
                        <button className="btn btn-primary m-2">Edit</button>
                        <button onClick={deleteNote} className="btn btn-danger m-2">Delete</button>
                    </div>
            </div>
        </>
    )
}

export default NoteCard
