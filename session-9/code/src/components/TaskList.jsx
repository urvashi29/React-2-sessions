import React, { memo } from "react";
import { useSelector } from "react-redux";

const TaskList = memo(() => {
  const taskList = useSelector((state) => state.taskList);

  const tasks = taskList.map((task) => <p>{task.title}</p>);

  return <>{tasks}</>;
});

export default TaskList;
