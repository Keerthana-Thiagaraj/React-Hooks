import React , { useState, useEffect } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
// import Prelogin from "./screens/prelogin/prelogin"
// import Homepage from "./screens/postlogin/homepage"
import Login from "./components/prelogin/login"
import Register from "./components/prelogin/register"
import Dashboard from "./components/postlogin/dashboard"
import desktopImage from "./images/strawberry.jpg"
import mobileImage from "./images/strawberry.jpg"
import './App.css';



function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;

  useEffect(() => {
    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleWindowResize);

    return () => {
        window.removeEventListener('resize', handleWindowResize);
    }
}, []);
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
      <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
            <div className="App-content">
                <h1>Pineapples</h1>
                <p>They are good</p>
            </div>
        </div>
    </div>
  );
}


export default App;
