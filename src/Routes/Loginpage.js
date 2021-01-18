import React, {useState} from "react";
import Footer from "../Component/Footer";
import Login from "../Component/Login";
import Navbar from "../Component/Navbar";


const Loginpage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) =>{
        const{target : {name, value}} =event;
        if(name === "email"){
            setEmail(value);
        }
        else if(name === "password"){
            setPassword(value);
        }
    }
return(
<div>
    <form>
        <input type = "text" placeholder = "email" required value = {email} onChange = {onChange}/>
        <input type = "password" placeholder = "password" required value = {password} onChange = {onChange}/>
        <input type = "submit" value = "log in"/>
    </form>
    <div>
        <button>continue with google</button>
    </div>
</div>
)}
export default Loginpage;

//로그인 하기 전 페이지

