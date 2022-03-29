import axios from 'axios';
import { useContext, useState } from "react"
import { useHistory } from "react-router-dom";
import wrongPassword from '../components/wrongPassword';
import { LoginContext } from '../Helper/Context';


function LoginForm() {

    const {loggedIn, setLoggedIn} = useContext(LoginContext);
    
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
          history.push("/upload");
        }else if(response.status === 401){
          console.log("LOL!");
          return <wrongPassword/>;
        }
      });
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