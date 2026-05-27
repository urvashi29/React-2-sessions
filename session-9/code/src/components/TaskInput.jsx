import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/actions";

const TaskInput = () => {
  // local state
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("todo");

  const dispatch = useDispatch();

  const handleAdd = () => {
    const task = {
      title,
      status,
    };
    dispatch(addTask(task));
  };

  return (
    <>
      <input
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Todo</option>
        <option>Done</option>
      </select>

      <button onClick={handleAdd}>Add</button>
    </>
  );
};

export default TaskInput;
