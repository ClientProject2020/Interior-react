export const fetchData = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "START" });
    try {
      dispatch({ type: "SUCCESS" });
    } catch (err) {
      console.log(err);
      dispatch({ type: "FAIL", error: err });
    }
  };
};
