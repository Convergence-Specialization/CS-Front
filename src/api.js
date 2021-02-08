import axios from "axios";
import { db } from "./firebase";
// TODO: Firestore 속성에서 50 이상 요청은 못하게.
import ko from "date-fns/locale/ko";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const api = axios.create({
  baseURL: "https://convergence-ssu.herokuapp.com/",
  // baseURL: "http://localhost:5000",
});

const getBearer = () => {
  // TODO: token expire 됐는지 확인 후 auth에서 재발급.
  // TODO: Token Expire 확인 후, user에서 재발급 시도. 재발급 실패 시 전체 로그아웃!!
  return `Bearer ${localStorage.getItem("idToken")}`;
};

export const userApi = {
  signUp: (body) => api.post("/user/signup", body),
  lostPw: (body) => api.post("/user/lostpw", body),
  checkGoogleSignUped: (body) => api.post("/user/checkgoogleexist", body),
};

export const departMajorApi = {
  getLists_OLD: (body) => api.post("board/departmajor/listview", body),
  getLists: (body) => {
    const { size, startAfterDocId } = body;
    // TODO: if startAfterDocId가 있으면..
    return db
      .collection("departMajor")
      .orderBy("timestamp", "desc")
      .limit(size)
      .get()
      .then((querySnapshot) => {
        let docsArray = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();

          let distanceText = formatDistanceToNow(data.timestamp.toMillis(), {
            locale: ko,
          }).replace("약 ", "");
          if (distanceText.includes("미만")) {
            distanceText = "방금";
          }
          docsArray.push({
            docId: doc.id,
            title: data.title,
            content: data.content,
            timestampDistance: distanceText,
            timestampMillis: data.timestamp.toMillis(),
            commentCount: data.comments_count,
            likeCount: data.likes_count,
            subject: data.subject,
          });
        });
        return docsArray;
      });
  },
  myEncryptedUid: (body) =>
    api.post("board/departmajor/myencrypteduid", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
  create: (body) =>
    api.post("board/departmajor/create", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
  like: (body) =>
    api.post("board/departmajor/like", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
  comment: {
    getLists: async (body) => {
      // TODO: myEncryptedUid로 본인이 좋아요 누른 댓글들은 좋아요 처리.
      const { docId, myEncryptedUid } = body;
      // 일반 댓글들 가져오기
      let commentsArr = await db
        .collection("departMajor")
        .doc(docId)
        .collection("comments")
        .orderBy("timestamp")
        .get()
        .then((querySnapshot) => {
          let docsArray = [];
          querySnapshot.forEach((doc) => {
            let data = doc.data();
            let distanceText = formatDistanceToNow(data.timestamp.toMillis(), {
              locale: ko,
            }).replace("약 ", "");
            if (distanceText.includes("미만")) {
              distanceText = "방금";
            }
            docsArray.push({
              commentId: doc.id,
              content: data.content,
              timestampDistance: distanceText,
              timestampMillis: data.timestamp.toMillis(),
              likeCount: data.likes_count,
              subCommentsExist: data.subCommentsExist,
              subComments: [],
            });
          });
          return docsArray;
        });
      // 대댓글들 가져오기. 병렬 promise 처리.
      await Promise.all(
        commentsArr.map(async (doc, idx) => {
          if (doc.subCommentsExist) {
            await db
              .collection("departMajor")
              .doc(docId)
              .collection("comments")
              .doc(doc.commentId)
              .collection("subcomments")
              .orderBy("timestamp")
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  let data = doc.data();
                  let distanceText = formatDistanceToNow(
                    data.timestamp.toMillis(),
                    {
                      locale: ko,
                    }
                  ).replace("약 ", "");
                  if (distanceText.includes("미만")) {
                    distanceText = "방금";
                  }
                  commentsArr[idx].subComments.push({
                    subcommentId: doc.id,
                    content: data.content,
                    timestampDistance: distanceText,
                    timestampMillis: data.timestamp.toMillis(),
                    likeCount: data.likes_count,
                  });
                });
              });
          }
        })
      );
      return commentsArr;
    },
    createSubComment: (body) =>
      api.post("board/departmajor/subcomment/create", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
    create: (body) =>
      api.post("board/departmajor/comment/create", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
  },
};
