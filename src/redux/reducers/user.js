import { types } from "../types/types";

const init_state = {
  id: 0,
  fullname: "",
  email: "",
};

export const userReducer = (state = init_state, action) => {
  if (action.type === types.USER_LOGIN) {
    return {
      ...action,
      ...action.payload,
    };
  } else if (action.type === types.USER_LOGOUT) return init_state;

  return state;
};
