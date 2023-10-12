import React, { useState, useEffect } from "react";
import axiosbaseurl from "../components/axiosbaseurl";
import TaskCard from "../components/TaskCard";

function Home() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axiosbaseurl.post("getTask").then((res) => {
      res.data === "error" ? alert("Something went wrong, try again later!") : res.data === "noData" ? setTasks([]) : setTasks(res.data);
    });
  }, []);

  return (
    <>
      <div className="d-flex justfi-content-center align-items-center">
        {tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              content={task.content}
              date={task.date}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
