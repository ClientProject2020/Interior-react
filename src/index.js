import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MainScreen from "./screens/App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/index";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ContactUs from "./screens/ContactUs/ContactUs";
import Error404 from "./screens/ErrorPages/Error404";
// import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutUs from "./screens/AboutUs/AboutUs";
import ServiceScreen from "./screens/Services/ServiceScreen";
import BlogsScreen from "./screens/Blogs/Blogs";
import PortfolioScreen from "./screens/Portfolio/PortfolioScreen";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL}/ErrorPage`}
            component={Error404}
          />
          <Fragment>
            <MainScreen>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                component={HomeScreen}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/contact`}
                component={ContactUs}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/aboutUs`}
                component={AboutUs}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/service`}
                component={ServiceScreen}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/blog`}
                component={BlogsScreen}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/portfolio`}
                component={PortfolioScreen}
              />
            </MainScreen>
          </Fragment>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
