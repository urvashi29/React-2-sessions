import { ADD_TASK, DECREMENT, INCREMENT } from "../actions/actionType";

// central storage state or global state
const initialState = {
  count: 0,
  taskList: [],
};

// returring central storage to React Components
export const taskReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, action.payload] };
    default:
      return state;
  }
};
