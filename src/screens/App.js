import React, { useState, useEffect } from "react";
import { fetchData } from "../store/actions/appMain";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AppHeader from "./Layout/AppHeader";
import AppFooter from "./Layout/AppFooter";

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("loaded");
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <AppHeader />
      {props.children}
      <AppFooter />
    </div>
  );
};

export default App;
