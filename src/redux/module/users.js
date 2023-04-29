import { v4 as uuidv4 } from "uuid";

const ADD = "ADD";
const DELETE = "DELETE";
const TOGGLE = "TOGGLE";

const initialState = [
  {
    id: uuidv4(),
    title: "이동언",
    body: "이동언입니다.",
    isDone: false,
  },
];

export const add = (title, body) => {
  return { type: ADD, title, body };
};

export const del = (id) => {
  return { type: DELETE, id };
};

export const toggle = (id, isDone) => {
  return { type: TOGGLE, id, isDone };
};

export const reducer_user = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const newUser = {
        id: uuidv4(),
        title: action.title,
        body: action.body,
        isDone: false,
      };
      return [...state, newUser];
    case DELETE:
      const delUser = state.filter((user) => user.id !== action.id);
      return delUser;
    case TOGGLE:
      const updateUser = state.map((user) =>
        user.id === action.id ? { ...user, isDone: !user.isDone } : user
      );
      return updateUser;
    default:
      return state;
  }
};

export default reducer_user;
