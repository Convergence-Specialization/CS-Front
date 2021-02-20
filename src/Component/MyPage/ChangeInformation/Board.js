import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { loginFunctions, useAuth } from "../../Watchers";
import message from "antd/lib/message";
import SelectSubjectModal from "../Modal";
import { userApi } from "../../../api";
import LoadingComponent from "../../SmallComponents/Loading";

const Container = styled.div`
  padding: 20px;
  width: 85%;
  border-radius: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  margin: 0px auto 30px auto;
  @media (max-width: 430px) {
    padding: 15px;
  }
`;
const Title = styled.div`
  margin-left: 40px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 16px;
`;

const Text = styled.div`
  font-size: 15px;
`;
const Con = styled.div``;

const Board = () => {
  const user = useAuth();
  const [subjectModalVisible, setSubjectModalVisible] = useState(false);
  const [myInfo, setMyInfo] = useState(null);
  useEffect(() => {
    const userInfo = loginFunctions.getUserInfo();
    if (!userInfo) return;
    userApi
      .getMyInfo({ uid: userInfo.uid })
      .then((info) => setMyInfo(info))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {!!loginFunctions.getUserInfo() && (
        <Con>
          {!myInfo ? (
            <LoadingComponent />
          ) : (
            <>
              <SelectSubjectModal
                visible={subjectModalVisible}
                onClose={() => setSubjectModalVisible(false)}
                name="회원 정보가 수정되었습니다."
              />
              <Title style={{ marginTop: "40px" }}>이름</Title>
              <Container>
                <Text>
                  {!!user
                    ? (!!user.displayName
                        ? user.displayName
                        : "융슝이"
                      ).concat()
                    : ""}
                </Text>
              </Container>
              <Title>학번</Title>
              <Container>
                <Text>{myInfo.student_id}</Text>
              </Container>
              <Title>이메일</Title>
              <Container style={{ marginBottom: "0px" }}>
                <Text>
                  {!!user
                    ? (!!user.email ? user.email : "융슝이").concat()
                    : ""}
                </Text>
              </Container>
              <Text style={{ marginTop: "13px", marginLeft: "40px" }}>
                ※ 이메일은 수정되지 않습니다.
              </Text>
              <Container
                onClick={() => {
                  message.success("정보가 수정되었습니다.");
                  setSubjectModalVisible(true);
                }}
                style={{ backgroundColor: "lightgray", marginTop: "35px" }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  정보 수정 완료
                </Text>
              </Container>
            </>
          )}
        </Con>
      )}
    </>
  );
};
export default Board;
