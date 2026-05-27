import { ADD_TASK, DECREMENT, INCREMENT } from "../actions/actionType";

export const incCounter = () => {
  return { type: INCREMENT, payload: 1 };
};

export const decCounter = () => {
  return { type: DECREMENT, payload: 1 };
};

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};
