import React, { useState } from "react";
import axiosbaseurl from "./axiosbaseurl";
import "./Modal.css";

function TaskCard({ id, title, content, date }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [titleState, setTitle] = useState(title);
  const [contentState, setContent] = useState(content);

  const deleteTask = () => {
    axiosbaseurl.post("deleteTask", { id: id }).then((res) => {
      res.data === "error"
        ? alert("Something went wrong, try again later!")
        : alert("Task Deleted Successfully!");
    });

    window.location.reload(true);
  };

  const handleEditTask = () => {
    axiosbaseurl
      .post("updateTask", { id: id, title: titleState, content: contentState })
      .then((res) => {
        res.data === "error"
          ? alert("Something went wrong, try again later!")
          : alert("Task Edited Successfully!");
      });

    window.location.reload(true);
  };

  const EditTask = () => {
    return (
      <div className="modal">
        <div className="overlay">
          <div className="modalContent">
            <h1 className="signin">Edit Task</h1>
            <button className="closeModal" onClick={toggleModal}>
              X
            </button>
            <div className="form">
              <form className="">
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control m-4"
                      style={{ fontSize: "1.2rem" }}
                      onChange={(e) => setTitle(e.target.value)}
                      id="inputTitle"
                      placeholder="Task Title"
                      value={titleState}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control m-4"
                      style={{ fontSize: "1.2rem" }}
                      onChange={(e) => setContent(e.target.value)}
                      id="inputPassword3"
                      placeholder="Task Content"
                      value={contentState}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-10">
                    <button
                      type="submit"
                      onClick={handleEditTask}
                      className="btn btn-success m-4"
                    >
                      Edit Task
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="card m-5" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title" style={{ fontWeight: "bolder" }}>
            {title}
          </h5>
          <p className="card-text text-start m-2" style={{ fontSize: ".7rem" }}>
            Date: {date}
          </p>
          <p className="card-text text-start">{content}</p>
          <button className="btn btn-primary m-2" onClick={toggleModal}>
            Edit
          </button>
          <button onClick={deleteTask} className="btn btn-danger m-2">
            Delete
          </button>
        </div>
      </div>
      {modal && EditTask()}
    </>
  );
}

export default TaskCard;
