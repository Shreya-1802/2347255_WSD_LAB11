import React, { useState } from "react";
import axiosbaseurl from "../components/axiosbaseurl";
import "./Modal.css";

function NoteCard({ id, title, content, date }) {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [titleState, setTitle] = useState(title);
  const [contentState, setContent] = useState(content);

  const deleteNote = () => {
    axiosbaseurl.post("deleteNote", { id: id }).then((res) => {
      res.data === "error"
        ? alert("Something went wrong, try again later!")
        : alert("Note Edited Successfully!");
    });

    window.location.reload(true);
  };

  const handleEditNote = () => {
    axiosbaseurl
      .post("updateNote", { id: id, title: titleState, content: contentState })
      .then((res) => {
        res.data === "error"
          ? alert("Something went wrong, try again later!")
          : alert("Note Deleted Successfully!");
      });

    window.location.reload(true);
  };

  const EditNote = () => {
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
                      placeholder="Note Title"
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
                      placeholder="Note Content"
                      value={contentState}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-10">
                    <button
                      type="submit"
                      onClick={handleEditNote}
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
          <button onClick={deleteNote} className="btn btn-danger m-2">
            Delete
          </button>
        </div>
      </div>
      {modal && EditNote()}
    </>
  );
}

export default NoteCard;
