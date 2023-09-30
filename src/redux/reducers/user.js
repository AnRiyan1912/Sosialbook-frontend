import { types } from "../types";

const init_state = {
  id: 0,
  fullname: "",
  email: "",
};

export const userReducer = (state = init_state, actiion) => {
  if (actiion.type == types.login) {
    return {
      ...state,
      id: actiion.payload.id,
      fullname: actiion.payload.fullname,
      email: actiion.payload.email,
    };
  } else if (actiion.type == types.logout) return init_state;

  return state;
};
