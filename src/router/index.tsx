import AsideMenu from "components/organisms/AsideMenu";
import Home from "pages/Home";
import Login from "pages/Login";
import Sub1 from "pages/Sub1";
import Sub2 from "pages/Sub2";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

function Root() {
  const accessToken = localStorage.getItem("accessToken");
  return (
    <>
      {!accessToken?.length ? (
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} exact />
            <Redirect from="*" to="/login" />
          </Switch>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <AsideMenu>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/sub1" component={Sub1} />
              <Route path="/sub2" component={Sub2} />

              <Redirect from="*" to="/" />
            </Switch>
          </AsideMenu>
        </BrowserRouter>
      )}
    </>
  );
}

export default Root;
