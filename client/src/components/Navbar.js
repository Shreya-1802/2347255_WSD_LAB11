import React from 'react'

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand m-4" href="/" style={{fontSize: '1.5rem'}}>Notify</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item m-2">
                            <a className="nav-link" href="/">Task</a>
                        </li>
                        <li className="nav-item m-2">
                            <a className="nav-link" href="/addTask">Add Task</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
