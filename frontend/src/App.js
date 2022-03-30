import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import LoginForm from './Pages/LoginForm';
import UploadForm from './Pages/UploadForm';
import wrongPassword from './Pages/wrongPassword';
import wrongEmail from './Pages/wrongEmail';
import { LoginContext, RootLoginContext } from './Helper/Context';
import { useState } from "react"; 



function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [rootLoggedIn, setRootLoggedIn] = useState(false);
  

  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
      <RootLoginContext.Provider value={{rootLoggedIn, setRootLoggedIn}}>
      <>
        <Router>
        <div>
          <h1>Welcome</h1>
          <Link to="/login">Login</Link>
        </div>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/upload" component={() => <UploadForm authorized={loggedIn} root={rootLoggedIn}/>} />
            <Route exact path="/wrongPassword" component={wrongPassword} />
            <Route exact path="/wrongEmail" component={wrongEmail} />
          </Switch>
        </Router>
      </>
      </RootLoginContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
