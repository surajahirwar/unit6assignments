import React from "react";
import styles from "./counter.module.css";

const Counter = ({task,tasks,up}) => {
  // sample value to be replaced
  
  // NOTE: do not delete `data-testid` key value pair
  const dataUpdate=(value)=>{
    
       for(var j=0;j<tasks.length;j++){
         if(tasks[j].id===task.id && tasks[j].count>0){
               let ans=[...tasks]
                ans[j].count+=value
                return up(ans)
           
               
               

         }
       }

      
  }
  return (
    <div className={styles.counter}>
      <button onClick={()=>dataUpdate(1)} data-testid="task-counter-increment-button">+</button>
      <span data-testid="task-counter-value">{task.count}</span>
      <button onClick={()=>dataUpdate(-1)} data-testid="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
