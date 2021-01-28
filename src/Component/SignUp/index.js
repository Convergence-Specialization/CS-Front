import React from "react";
import { useState } from "react";
import { authService } from "../../fbase";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  return (
    <div>
      <input
        placeholder="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />
      <input
        type="password"
        placeholder="pw"
        value={pw}
        onChange={({ target: { value } }) => setPw(value)}
      />
      <button
        onClick={() => {
          authService
            .createUserWithEmailAndPassword(email, pw)
            .then((result) => {
              alert(result);
            })
            .catch((err) => {
              alert(err);
            });
        }}>
        회원가입
      </button>
    </div>
  );
};
export default SignUp;
