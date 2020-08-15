import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers/index";
import thunkMiddleware from "redux-thunk";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension
      ? window.devToolsExtension()
      : function (f) {
          console.log("no dev tool");
          return f;
        }
  )
);

export default store;
