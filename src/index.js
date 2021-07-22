import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AppComponent from "./App";
import "@fontsource/roboto";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

window.store = store;


// basename={process.env.PUBLIC_URL}