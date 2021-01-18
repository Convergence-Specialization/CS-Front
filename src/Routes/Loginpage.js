import React, {useState} from "react";
import Footer from "../Component/Footer";
import Login from "../Component/Login";
import Navbar from "../Component/Navbar";
import { authService } from "../fbase";



const Loginpage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (event) =>{
        const{target : {name, value}} =event;
        if(name === "email"){
            setEmail(value);
        }
        else if(name === "password"){
            setPassword(value);
        }
    };
    const onSubmit = async (event) => {
      event.preventDefault();
      try {
        let data;
        if (newAccount) {
          data = await authService.createUserWithEmailAndPassword(
            email,
            password
          );
        } else {
          data = await authService.signInWithEmailAndPassword(email, password);
        }
        console.log(data);
      } catch (error) {
        setError(error.message);
    }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);


    return (
        <div>
          <form onSubmit={onSubmit}>
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={onChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={onChange}
            />
            <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
            <input
              type="submit"
              value={newAccount ? "Create Account" : "Sign In"}
            />
            {error}
          </form>
          <span onClick={toggleAccount}>
            {newAccount ? "Sign In" : "Create Account"}
          </span>
          <div>
            <button>Continue with Google</button>
            <button>Continue with Github</button>
          </div>
        </div>
      );
    };
export default Loginpage;

//로그인 하기 전 페이지

