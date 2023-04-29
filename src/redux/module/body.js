const SET_BODY = "SET_BODY";
const RESET_BODY = "RESET_BODY";

const initialState = "";

export const setbody = (e) => {
  return { type: SET_BODY, payload: e.target.value };
};

export const resetbody = () => {
  return { type: RESET_BODY };
};

export const reducer_body = (state = initialState, action) => {
  switch (action.type) {
    case SET_BODY:
      return action.payload;
    case RESET_BODY:
      return initialState;
    default:
      return state;
  }
};

export default reducer_body;
