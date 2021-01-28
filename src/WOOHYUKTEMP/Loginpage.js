import React, {useState} from "react";
import { authService, firebaseInstance } from "../fbase";



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
    const onSocialClick =async(event) => {
      const {target:{name},} = event;
      let provider;
      if (name ==="google"){
        provider =new firebaseInstance.auth.GoogleAuthProvider();
      }
      const data = await authService.signInWithPopup(provider);
    };

    return (
        <div>
          <form onSubmit={onSubmit}>
            <input
              name="email"
              type="email"
              placeholder="이메일"
              required
              value={email}
              onChange={onChange}
            />
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              required
              value={password}
              onChange={onChange}
            />
            <input type="submit" value={newAccount ? "회원가입" : "로그인"}
            />
            {error}
          </form>
          <span onClick={toggleAccount}>
            {newAccount ? "로그인" : "회원가입"}
          </span>
          <div>
            <button onClick = {onSocialClick} name = "google">구글 로그인</button>
          </div>
        </div>
      );
    };
export default Loginpage;

//로그인 하기 전 페이지

