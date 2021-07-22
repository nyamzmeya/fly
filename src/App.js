import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthComponent } from "./screens/auth/AuthPage";
import MainComponent from "./screens/fly/MainCard";

let mapStateToProps = (state) => {
  return {
    isAuth: state.authPage.isAuth,
  };
};

function App(props) {
  return (
    <BrowserRouter>
      <Route
        render={() =>
          props.isAuth ? (
            <Route component={MainComponent} />
          ) : (
            <Route component={AuthComponent} />
          )
        }
      />
    </BrowserRouter>
  );
}

let AppComponent = connect(mapStateToProps, {})(App);

export default AppComponent;
