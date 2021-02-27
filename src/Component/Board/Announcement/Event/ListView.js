import styled from "styled-components";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { announcementApi } from "../../../../api";
import LoadingSmall from "../../../SmallComponents/LoadingSmall";
import { timeConverter } from "../../../../assets/Dicts";

const Container = styled.div`
  background-color: white;
  margin: 20px 0px;
  width: 93%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;
const Con = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
  `;
const BoardText = styled.div`
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const TitleTextBox = styled.div`
  width: 100%;
  font-size: 10px;
  display: flex;
  margin: 3px 0px;
  flex-direction: column;
  justify-content: space-between;
`;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const BoardChildWrapper = styled.div`
  border-bottom: 2.5px solid #f1f1f1;
  padding: 10px 15px 10px 15px;
  justify-content: space-between;
  height: 12vh;
  width: 100%;
  display: flex;
`;
const BoardChildTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BoardImg = styled.img`
  width: 20%;
  border-radius: 10px;
`;

const ListView = () => {
  const history = useHistory();

  const [announcementPosts, setAnnouncementPosts] = useState([]);

  useEffect(() => {
    announcementApi
      .getLists({ size: 10 })
      .then((docsArray) => setAnnouncementPosts(docsArray))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <Con>
      
    
      <Container>
      <button
        onClick={() =>
          history.push({
            pathname: `/board/announcement`,
            state: {
              pageName: "create",
            },
          })
        }>
        글 작성
      </button>
        <BoardContainer>
          {announcementPosts.length === 0 ? (
            <LoadingSmall />
          ) : (
            <>
              {announcementPosts.map((item, idx) => (
                <BoardChildWrapper
                  key={`${idx}ANNOUNCEMENT_PREVIEW`}
                  onClick={() =>
                    history.push({
                      pathname: `/board/announcement`,
                      state: {
                        pageName: "read",
                        docItem: item,
                      },
                    })
                  }
                >
                  <TitleTextBox>
                    <BoardChildTitle>{item.title}</BoardChildTitle>
                    <BoardText>{item.content}</BoardText>
                    {timeConverter(item.timestampMillis)}
                  </TitleTextBox>
                  {!!item.imgArray[0] && (
                    <BoardImg
                      src={item.imgArray[0]}
                      alt={`${idx}IMAGE_ANNOUNCE`}
                    />
                  )}
                </BoardChildWrapper>
              ))}
            </>
          )}
        </BoardContainer>
      </Container>
    </Con>
  );
};
export default ListView;
