import axios from 'axios';
import { useContext, useState } from "react"
import { useHistory } from "react-router-dom";
import { LoginContext, RootLoginContext } from '../Helper/Context';


function LoginForm() {

    const {loggedIn, setLoggedIn} = useContext(LoginContext);
    const {rootLoggedIn, setRootLoggedIn} = useContext(RootLoginContext);
    
    let history = useHistory();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const login = () => {
      axios.post("http://localhost:5000/user/login", {
        email: email,
        password: password,
      }).then((response) => {
        if(response.status === 200) {
          setLoggedIn(true);
        
          if(response.data[0].email === "root@root.de") {
            setRootLoggedIn(true);
            console.log("Root logged in!");
          }

          history.push("/upload");
        }
        
      }).catch((error) => {
        console.log(error);
        if(error.response.data === "Wrong password!") {
          history.push("/wrongPassword");
          
        }else if(error.response.data === "No such email!") {
          history.push("/wrongEmail");
        }
      })
    };
    
    return (
        <div>
        <h1>Login</h1>
            <div className="login-form">
              <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
              <input type="password" placeholder="Password" onChange={ (e) => { setPassword(e.target.value) }} />
              <button onClick={login}>Login</button>
            </div>
        </div>
    );
    
}

export default LoginForm;