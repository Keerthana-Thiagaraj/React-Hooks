import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
// import Prelogin from "./screens/prelogin/prelogin"
// import Homepage from "./screens/postlogin/homepage"
import Login from "./components/prelogin/login"
import Register from "./components/prelogin/register"
import Dashboard from "./components/postlogin/dashboard"

function App() {
  return (
    <div >
      <BrowserRouter> 
        <Switch>
          <Route path="/" exact component={Login} />  {/* note the usage of exact */}
          <Route path="/Register" exact component={Register} />
          <Route path="/Dashboard" exact component={Dashboard} />
          <Redirect to={Login} />
        </Switch>  {/* note the usage of Switch */}
      </BrowserRouter>
    </div>
  );
}


export default App;
