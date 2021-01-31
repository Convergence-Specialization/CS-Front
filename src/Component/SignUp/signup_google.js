import { message } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { userApi } from "../../api";
import { authService } from "../../firebase";

const SignUpGoogle = () => {
  const history = useHistory();
  const [loading, setLoading] = useState();
  return (
    <div style={{ lineHeight: "1.6" }}>
      <h1>구글 추가 정보 기입하는 페이지</h1>
      <div>다음은 기본 정보 입니다.</div>
      <br />
      <div>이메일: {authService.currentUser.email}</div>
      <div>이름: {authService.currentUser.displayName}</div>
      <br />
      <div>비번은 표시 안해줍니다. 받아오지도 않긴합니다 사실</div>
      <input id={"studentId"} placeholder="학번 입력해주셈" />
      <div />
      <input id="isConvergence" type="checkbox" />
      <span>융특 학생임?</span>
      <input id="didAgree" type="checkbox" />
      <span>약관 동의함?</span>
      <div />
      <button
        onClick={() => {
          if (loading) return;
          if (document.getElementById("didAgree").checked === false) {
            alert("약관에 동의해주세요");
            return;
          }
          if (document.getElementById("studentId").value === "") {
            alert("이름과 학번을 입력해주세요");
            return;
          }
          setLoading(true);
          message.loading("회원가입 중..", 10);
          userApi
            .signUp({
              method: "GOOGLE",
              uid: authService.currentUser.uid,
              email: authService.currentUser.email,
              name: authService.currentUser.displayName,
              student_id: document.getElementById("studentId").value,
              is_convergence: document.getElementById("isConvergence").checked,
            })
            .then(() => {
              message.destroy();
              message.success("구글 추가 정보 입력 완료. 즐기십쇼");
              history.push("/");
            })
            .catch((err) => {
              message.destroy();
              message.error(err.message);
              setLoading(false);
            });
        }}>
        구글 회원가입 마무리하기
      </button>
    </div>
  );
};
export default SignUpGoogle;
