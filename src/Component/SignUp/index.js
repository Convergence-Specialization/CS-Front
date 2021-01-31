import { message } from "antd";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { userApi } from "../../api";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  return (
    <div style={{ lineHeight: "1.9" }}>
      <div>이메일로 회원가입하는 공간</div>
      <div>
        <input
          placeholder="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </div>
      <input
        type="password"
        placeholder="pw"
        value={pw}
        onChange={({ target: { value } }) => setPw(value)}
      />
      <input
        type="password"
        placeholder="pw check"
        value={pwCheck}
        onChange={({ target: { value } }) => setPwCheck(value)}
      />
      <div>
        {pw === pwCheck ? "비번이 동일합니다" : "비번이 동일하지 않습니다"}
      </div>
      <div>
        <input id="nameField" placeholder="이름" />
      </div>
      <div>
        <input id="studentNumber" placeholder="학번" />
      </div>
      <input id="isConvergence" type="checkbox" />
      <span>융특 학생임?</span>
      <input id="didAgree" type="checkbox" />
      <span>약관 동의함?</span>
      <div>
        <button
          onClick={() => {
            if (loading) return;
            if (document.getElementById("didAgree").checked === false) {
              alert("약관에 동의해주세요");
              return;
            }
            if (email === "") {
              alert("이메일을 입력해주세요");
              return;
            }
            if (
              document.getElementById("nameField").value === "" ||
              document.getElementById("studentNumber").value === ""
            ) {
              alert("이름과 학번을 입력해주세요");
              return;
            }
            setLoading(true);
            message.loading("회원가입 중..", 10);
            userApi
              .signUp({
                method: "EMAIL",
                name: document.getElementById("nameField").value,
                email: email,
                student_id: document.getElementById("studentNumber").value,
                is_convergence: document.getElementById("isConvergence")
                  .checked,
                password: pw,
              })
              .then(() => {
                message.destroy();
                message.success("회원가입 성공. 로그인 해주세요.");
                history.push("/login");
              })
              .catch((err) => {
                message.destroy();
                message.error(err.message);
                setLoading(false);
              });
          }}
          disabled={pw !== pwCheck}>
          회원가입
        </button>
      </div>
    </div>
  );
};
export default SignUp;
