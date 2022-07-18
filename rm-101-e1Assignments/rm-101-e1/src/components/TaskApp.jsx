import React from "react";
import data from "../data/tasks.json"
import styles from "./taskApp.module.css";
import AddTask from "../components/AddTask/AddTask"
import  TaskHeader  from "./TaskHeader/TaskHeader"
import Tasks from "./Tasks/Tasks"
import { useState } from "react";
const TaskApp = () => {
  // NOTE: do not delete `data-testid` key value pair
  
  console.log(data)
  const [taskData,setTaskdata]=useState(data)
   
  return (
    <div data-testid="task-app" className={styles.taskApp}>
   
      <TaskHeader tasks={taskData} />
      {<AddTask func={setTaskdata} tasks={taskData}/>}
      {<Tasks tasks={taskData} func={setTaskdata}/>}
    </div>
  );
};

export default TaskApp;
