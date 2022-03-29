import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LoginForm from './Pages/LoginForm';
import UploadForm from './Pages/UploadForm';
import { LoginContext } from './Helper/Context';
import { useState } from "react"; 


function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
      <>
        <Router>
        <div>
          <h1>Welcome</h1>
          <Link to="/login">Login</Link>
        </div>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/upload" component={() => <UploadForm authorized={loggedIn} />} />
          </Switch>
        </Router>
      </>
    </LoginContext.Provider>
  );
}

export default App;
