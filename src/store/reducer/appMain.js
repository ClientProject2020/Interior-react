import { updateObject } from "../../shared/utility";
const initialState = {
  error: "",
  isLoading: "",
  data: "",
};

const setDataStart = (state, action) => {
  return updateObject(state, {
    isLoading: true,
  });
};

const setDataSuccess = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    data: "Azure homes and consultants",
  });
};

const setDataFail = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    error: action.error,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return setDataStart(state, action);
    case "SUCCESS":
      return setDataSuccess(state, action);
    case "FAIL":
      return setDataFail(state, action);
    default:
      return state;
  }
};
