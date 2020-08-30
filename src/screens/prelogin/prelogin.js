import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Login from "../../components/prelogin/login"
import Register from "../../components/prelogin/register"

function prelogin() {
    return (
        <div>
            <BrowserRouter>
                {/* <Switch> */}
                    <Route path="/" exact component={Login} />
                    <Route path="/Register" exact component={Register} />
                    {/* <Redirect to={Login} />
                </Switch> */}
            </BrowserRouter>
            prelogin
        </div>
    );
}
export default prelogin