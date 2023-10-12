import React, { useState, useEffect } from 'react'
import axiosbaseurl from '../components/axiosbaseurl'
import NoteCard from '../components/NoteCard';

function Home() {

    const [notes, setNotes] = useState([])
    useEffect(() => {
        axiosbaseurl.post("getNote")
            .then((res) => {
                res.data === "error" ? alert("Something went wrong, try again later!") : setNotes(res.data)
            })

    }, []);


    return (
        <>
            <div className="d-flex justfi-content-center align-items-center">
                {notes.map((note) => {
                    return (
                        <NoteCard key={note.id} id={note.id} title={note.title} content={note.content} date={note.date} />
                    )
                })}

            </div>
        </>
    )
}

export default Home
