import axios from "axios";
import { db } from "./firebase";
// TODO: Firestore 속성에서 50 이상 요청은 못하게.
import ko from "date-fns/locale/ko";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { NOTIFICATION_TYPES } from "./assets/Dicts";

const api = axios.create({
  baseURL: "https://convergence-ssu.herokuapp.com/",
  // baseURL: "http://localhost:5000",
});

const getBearer = () => `Bearer ${localStorage.getItem("idToken")}`;
export const userApi = {
  signUp: (body) => api.post("/user/signup", body),
  lostPw: (body) => api.post("/user/lostpw", body),
  checkGoogleSignUped: (body) => api.post("/user/checkgoogleexist", body),
  getMyPosts: async (body) => {
    // boardName == departmajor | convergence
    const { boardName, size, uid } = body;
    const querySnapshot = await db
      .collection("users")
      .doc(uid)
      .collection(`myposts_${boardName}`)
      .orderBy("timestamp", "desc")
      .limit(size)
      .get();
    let docsArray = [];
    querySnapshot.forEach((doc) => {
      docsArray.push({
        docId: doc.id,
      });
    });
    return await Promise.all(
      docsArray.map((item, _idx) =>
        db
          .collection("departMajor")
          .doc(item.docId)
          .get()
          .then((doc) => {
            let data = doc.data();
            let distanceText = formatDistanceToNow(data.timestamp.toMillis(), {
              locale: ko,
            }).replace("약 ", "");
            if (distanceText.includes("미만")) {
              distanceText = "방금";
            }
            return {
              docId: doc.id,
              title: data.title,
              content: data.content,
              timestampDistance: distanceText,
              timestampMillis: data.timestamp.toMillis(),
              commentCount: data.comments_count,
              likeCount: data.likes_count,
              subject: data.subject,
            };
          })
      )
    );
  },
  getReadNotifications: async (body) => {
    const { uid, size } = body;
    const querySnapshot = await db
      .collection("users")
      .doc(uid)
      .collection("notifications")
      .where("checked", "==", true)
      .orderBy("timestamp", "desc")
      .limit(size)
      .get();
    let notificationsArray = [];
    querySnapshot.forEach((item) => {
      let data = item.data();
      let distanceText = formatDistanceToNow(data.timestamp.toMillis(), {
        locale: ko,
      }).replace("약 ", "");
      if (distanceText.includes("미만")) {
        distanceText = "방금";
      }
      notificationsArray.push({
        docId: data.docId,
        notificationId: item.id,
        boardName: data.boardName,
        type: data.type,
        checked: data.checked,
        timestampDistance: distanceText,
        timestampMillis: data.timestamp.toMillis(),
        notificationBody: NOTIFICATION_TYPES[data.type].content,
        preview: data.preview,
      });
    });
    return notificationsArray;
  },
  getUnreadNotifications: async (body) => {
    const { uid, size } = body;
    const querySnapshot = await db
      .collection("users")
      .doc(uid)
      .collection("notifications")
      .where("checked", "==", false)
      .orderBy("timestamp", "desc")
      .limit(size)
      .get();
    let notificationsArray = [];
    querySnapshot.forEach((item) => {
      let data = item.data();
      let distanceText = formatDistanceToNow(data.timestamp.toMillis(), {
        locale: ko,
      }).replace("약 ", "");
      if (distanceText.includes("미만")) {
        distanceText = "방금";
      }
      notificationsArray.push({
        docId: data.docId,
        notificationId: item.id,
        boardName: data.boardName,
        type: data.type,
        checked: data.checked,
        timestampDistance: distanceText,
        timestampMillis: data.timestamp.toMillis(),
        notificationBody: NOTIFICATION_TYPES[data.type].content,
        preview: data.preview,
      });
    });
    return notificationsArray;
  },
};

export const departMajorApi = {
  getLists: (body) => {
    const { size, startAfterDocId, subject } = body;
    // TODO: if startAfterDocId가 있으면..
    if (subject !== undefined && subject !== "" && subject !== "NONE") {
      return db
        .collection("departMajor")
        .where("subject", "==", subject)
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
    } else {
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
    }
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
  delete: (body) =>
    api.post("board/departmajor/delete", body, {
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
    create: (body) =>
      api.post("board/departmajor/comment/create", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
    like: (body) =>
      api.post("board/departmajor/comment/like", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
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
          querySnapshot.forEach(async (doc) => {
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
          await Promise.all([
            new Promise(async (resolve) => {
              // 대댓글 가져오는 promise.
              if (doc.subCommentsExist) {
                const querySnapshot = await db
                  .collection("departMajor")
                  .doc(docId)
                  .collection("comments")
                  .doc(doc.commentId)
                  .collection("subcomments")
                  .orderBy("timestamp")
                  .get();
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
                // 각 대댓글들에서 본인이 좋아요 눌렀는지 확인.
                await Promise.all(
                  commentsArr[idx].subComments.map(async (subItem, subIdx) => {
                    commentsArr[idx].subComments[subIdx].didILiked = await db
                      .collection("departMajor")
                      .doc(docId)
                      .collection("comments")
                      .doc(commentsArr[idx].commentId)
                      .collection("subcomments")
                      .doc(subItem.subcommentId)
                      .collection("likes")
                      .where("encryptedUid", "==", myEncryptedUid)
                      .get()
                      .then((querySnapshot) => querySnapshot.size !== 0);
                  })
                );
              }
              resolve();
            }),
            new Promise(async (resolve) => {
              // 내가 좋아요 했는지 확인하는 promise
              commentsArr[idx].didILiked = await db
                .collection("departMajor")
                .doc(docId)
                .collection("comments")
                .doc(doc.commentId)
                .collection("likes")
                .where("encryptedUid", "==", myEncryptedUid)
                .get()
                .then((querySnapshot) => querySnapshot.size !== 0);
              resolve();
            }),
          ]);
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
    likeSubComment: (body) =>
      api.post("board/departmajor/subcomment/like", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
  },
};

export const globalApi = {
  getSingleDoc: async (body) => {
    let { boardName, docId } = body;
    const doc = await db.collection(boardName).doc(docId).get();
    const data = doc.data();
    let distanceText = formatDistanceToNow(data.timestamp.toMillis(), {
      locale: ko,
    }).replace("약 ", "");
    if (distanceText.includes("미만")) {
      distanceText = "방금";
    }
    return {
      docId: doc.id,
      title: data.title,
      content: data.content,
      timestampDistance: distanceText,
      timestampMillis: data.timestamp.toMillis(),
      commentCount: data.comments_count,
      likeCount: data.likes_count,
      subject: data.subject,
    };
  },
  checkNotification: async (body) => {
    let { notificationId, uid } = body;
    try {
      await db
        .collection("users")
        .doc(uid)
        .collection("notifications")
        .doc(notificationId)
        .update({ checked: true });
    } catch (err) {
      console.log(err.message);
    }
  },
};
