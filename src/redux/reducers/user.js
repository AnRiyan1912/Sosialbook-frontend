import { types } from "../types/types";

const init_state = {
  id: 0,
};

export const userReducer = (state = init_state, action) => {
  if (action.type === types.USER_LOGIN) {
    console.log(state);
    console.log(action.payload);
    return {
      ...state,
      ...action.payload,
    };
  } else if (action.type === types.USER_LOGOUT) return init_state;
  return state;
};
