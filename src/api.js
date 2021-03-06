import axios from "axios";
import { db, firestoreInstance } from "./firebase";
import ko from "date-fns/locale/ko";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { boardNameDict, NOTIFICATION_TYPES } from "./assets/Dicts";

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
    let BOARDNAME = "convergence";
    if (boardName === "departmajor") {
      BOARDNAME = "departMajor";
    }
    return await Promise.all(
      docsArray.map((item, _idx) =>
        db
          .collection(BOARDNAME)
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
              title: data.title, // not required
              content: data.content,
              timestampDistance: distanceText,
              timestampMillis: data.timestamp.toMillis(),
              commentCount: data.comments_count,
              likeCount: data.likes_count,
              subject: data.subject, // not required
              nickname: data.nickname,
              encryptedUid: data.encryptedUid,
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
  deleteNotification: async (body) => {
    const { uid, notificationId } = body;
    return await db
      .collection("users")
      .doc(uid)
      .collection("notifications")
      .doc(notificationId)
      .delete();
  },
  getMyInfo: async (body) => {
    let { uid } = body;
    return await db
      .collection("users")
      .doc(uid)
      .get()
      .then((doc) => doc.data());
  },
  saveDoc: async (body) => {
    let { boardName, docId, uid } = body;

    // 만약 이미 저장한 문서라면
    if (
      await db
        .collection("users")
        .doc(uid)
        .collection("savedDocs")
        .where("boardName", "==", boardName)
        .where("docId", "==", docId)
        .get()
        .then((querySnapshot) => querySnapshot.size !== 0)
    ) {
      return "ALREADY_SAVED";
    }

    // 저장 안되어있으면 저장함.
    await db
      .collection("users")
      .doc(uid)
      .collection("savedDocs")
      .doc(boardName.concat(docId))
      .set({
        docId,
        boardName,
        timestamp: firestoreInstance.FieldValue.serverTimestamp(),
      });
  },
  getSavedLists: async (body) => {
    let { size, startAfterDocId, uid } = body;
    if (!startAfterDocId) {
      const querySnapshot = await db
        .collection("users")
        .doc(uid)
        .collection("savedDocs")
        .orderBy("timestamp", "desc")
        .limit(size)
        .get();
      let docsList = [];

      querySnapshot.forEach((doc) =>
        docsList.push({ ...doc.data(), savedDocId: doc.id })
      );
      await Promise.all(
        docsList.map(async (item, idx) => {
          let data = await db
            .collection(boardNameDict[item.boardName].dbName)
            .doc(item.docId)
            .get()
            .then((doc) => doc.data());
          if (!data) {
            return;
          }
          let distanceText = formatDistanceToNow(data.timestamp.toMillis(), {
            locale: ko,
          }).replace("약 ", "");
          if (distanceText.includes("미만")) {
            distanceText = "방금";
          }
          docsList[idx].docItem = {
            docId: item.docId,
            content: data.content,
            nickname: data.nickname,
            title: data.title, // not required
            timestampDistance: distanceText,
            timestampMillis: data.timestamp.toMillis(),
            commentCount: data.comments_count,
            likeCount: data.likes_count,
            encryptedUid: data.encryptedUid,
            subject: data.subject, // not required
          };
          return;
        })
      );

      // 문서 삭제되어 있으면 빼버리기.
      docsList.forEach((item, idx) => {
        if (!item.docItem) {
          docsList.splice(idx, 1);
        }
      });
      return docsList;
    } else {
      // 더 보기를 누른 상태이면.
      const startAfterDoc = await db
        .collection("users")
        .doc(uid)
        .collection("savedDocs")
        .doc(startAfterDocId)
        .get();

      const querySnapshot = await db
        .collection("users")
        .doc(uid)
        .collection("savedDocs")
        .orderBy("timestamp", "desc")
        .startAfter(startAfterDoc)
        .limit(size)
        .get();
      let docsList = [];

      querySnapshot.forEach((doc) =>
        docsList.push({ ...doc.data(), savedDocId: doc.id })
      );
      await Promise.all(
        docsList.map(async (item, idx) => {
          let data = await db
            .collection(boardNameDict[item.boardName].dbName)
            .doc(item.docId)
            .get()
            .then((doc) => doc.data());
          if (!data) {
            return;
          }

          let distanceText = formatDistanceToNow(data.timestamp.toMillis(), {
            locale: ko,
          }).replace("약 ", "");
          if (distanceText.includes("미만")) {
            distanceText = "방금";
          }
          docsList[idx].docItem = {
            docId: item.docId,
            content: data.content,
            nickname: data.nickname,
            title: data.title, // not required
            timestampDistance: distanceText,
            timestampMillis: data.timestamp.toMillis(),
            commentCount: data.comments_count,
            likeCount: data.likes_count,
            encryptedUid: data.encryptedUid,
            subject: data.subject, // not required
          };
          return;
        })
      );
      // 문서 삭제되어 있으면 빼버리기.
      docsList.forEach((item, idx) => {
        if (!item.docItem) {
          docsList.splice(idx, 1);
        }
      });
      return docsList;
    }
  },
  withdraw: (body) =>
    api.post("/user/remove", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
};

export const announcementApi = {
  create: (body) =>
    api.post("board/announcement/create", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
  getLists: async (body) => {
    let { size } = body;
    const querySnapshot = await db
      .collection("announcement")
      .orderBy("timestamp", "desc")
      .limit(size)
      .get();
    let docsArray = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      docsArray.push({
        docId: doc.id,
        title: data.title,
        content: data.content,
        timestampMillis: data.timestamp.toMillis(),
        eventPeriod: data.eventPeriod,
        imgArray: data.imgArray,
        ongoing: data.ongoing,
      });
    });
    return docsArray;
  },
  requestDeleteDoc: (body) =>
    api.post("board/announcement/delete", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
  changeOngoing: (body) =>
    api.post("board/announcement/changeongoing", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
};

export const promotionApi = {
  create: (body) =>
    api.post("board/promotion/create", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
  getLists: async (body) => {
    let { size } = body;
    const querySnapshot = await db
      .collection("promotion")
      .orderBy("timestamp", "desc")
      .limit(size)
      .get();
    let docsArray = [];
    querySnapshot.forEach((doc) => {
      let data = doc.data();
      docsArray.push({
        docId: doc.id,
        title: data.title,
        content: data.content,
        timestampMillis: data.timestamp.toMillis(),
        eventPeriod: data.eventPeriod,
        imgArray: data.imgArray,
      });
    });
    return docsArray;
  },
  requestDeleteDoc: (body) =>
    api.post("board/promotion/delete", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
};

export const hotApi = {
  getLists: async (body) => {
    let { size, startAfterDocId } = body;
    if (!startAfterDocId) {
      const querySnapshot = await db
        .collection("hot")
        .orderBy("timestamp", "desc")
        .limit(size)
        .get();
      let docsList = [];

      querySnapshot.forEach((doc) =>
        docsList.push({ ...doc.data(), hotDocId: doc.id })
      );
      await Promise.all(
        docsList.map(async (item, idx) => {
          let data = await db
            .collection(boardNameDict[item.boardName].dbName)
            .doc(item.docId)
            .get()
            .then((doc) => doc.data());

          let distanceText = formatDistanceToNow(data.timestamp.toMillis(), {
            locale: ko,
          }).replace("약 ", "");
          if (distanceText.includes("미만")) {
            distanceText = "방금";
          }
          docsList[idx].docItem = {
            docId: item.docId,
            content: data.content,
            nickname: data.nickname,
            title: data.title, // not required
            timestampDistance: distanceText,
            timestampMillis: data.timestamp.toMillis(),
            commentCount: data.comments_count,
            likeCount: data.likes_count,
            encryptedUid: data.encryptedUid,
            subject: data.subject, // not required
          };
          return;
        })
      );
      return docsList;
    } else {
      // 더 보기를 누른 상태이면.
      const startAfterDoc = await db
        .collection("hot")
        .doc(startAfterDocId)
        .get();

      const querySnapshot = await db
        .collection("hot")
        .orderBy("timestamp", "desc")
        .startAfter(startAfterDoc)
        .limit(size)
        .get();
      let docsList = [];

      querySnapshot.forEach((doc) => docsList.push(doc.data()));
      await Promise.all(
        docsList.map(async (item, idx) => {
          let data = await db
            .collection(boardNameDict[item.boardName].dbName)
            .doc(item.docId)
            .get()
            .then((doc) => doc.data());

          let distanceText = formatDistanceToNow(data.timestamp.toMillis(), {
            locale: ko,
          }).replace("약 ", "");
          if (distanceText.includes("미만")) {
            distanceText = "방금";
          }
          docsList[idx].docItem = {
            docId: item.docId,
            content: data.content,
            nickname: data.nickname,
            title: data.title, // not required
            timestampDistance: distanceText,
            timestampMillis: data.timestamp.toMillis(),
            commentCount: data.comments_count,
            likeCount: data.likes_count,
            encryptedUid: data.encryptedUid,
            subject: data.subject, // not required
          };
          return;
        })
      );
      return docsList;
    }
  },
};

export const convergenceApi = {
  getLists: async (body) => {
    const { size, startAfterDocId } = body;
    if (!startAfterDocId) {
      const querySnapshot = await db
        .collection("convergence")
        .orderBy("timestamp", "desc")
        .limit(size)
        .get();
      let docsArray = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();

        if (data.report_count >= 5) {
          return;
        }

        let distanceText = formatDistanceToNow(data.timestamp.toMillis(), {
          locale: ko,
        }).replace("약 ", "");
        if (distanceText.includes("미만")) {
          distanceText = "방금";
        }
        docsArray.push({
          docId: doc.id,
          content: data.content,
          nickname: data.nickname,
          timestampDistance: distanceText,
          timestampMillis: data.timestamp.toMillis(),
          commentCount: data.comments_count,
          likeCount: data.likes_count,
          encryptedUid: data.encryptedUid,
        });
      });
      return docsArray;
    } else {
      // 더 보기를 누른 상태이면.
      const startAfterDoc = await db
        .collection("convergence")
        .doc(startAfterDocId)
        .get();

      const querySnapshot_3 = await db
        .collection("convergence")
        .orderBy("timestamp", "desc")
        .startAfter(startAfterDoc)
        .limit(size)
        .get();
      let docsArray_3 = [];
      querySnapshot_3.forEach((doc_3) => {
        let data_3 = doc_3.data();

        if (data_3.report_count >= 5) {
          return;
        }

        let distanceText_3 = formatDistanceToNow(data_3.timestamp.toMillis(), {
          locale: ko,
        }).replace("약 ", "");
        if (distanceText_3.includes("미만")) {
          distanceText_3 = "방금";
        }
        docsArray_3.push({
          docId: doc_3.id,
          content: data_3.content,
          nickname: data_3.nickname,
          timestampDistance: distanceText_3,
          timestampMillis: data_3.timestamp.toMillis(),
          commentCount: data_3.comments_count,
          likeCount: data_3.likes_count,
          encryptedUid: data_3.encryptedUid,
        });
      });
      return docsArray_3;
    }
  },
  myEncryptedUid: (body) =>
    api.post("board/convergence/myencrypteduid", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
  create: (body) =>
    api.post("board/convergence/create", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
  delete: (body) =>
    api.post("board/convergence/delete", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
  report: (body) =>
    api.post("board/convergence/report", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
  like: (body) =>
    api.post("board/convergence/like", body, {
      headers: {
        Authorization: getBearer(),
      },
    }),
  comment: {
    create: (body) =>
      api.post("board/convergence/comment/create", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
    report: (body) =>
      api.post("board/convergence/comment/report", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
    delete: (body) =>
      api.post("board/convergence/comment/delete", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
    like: (body) =>
      api.post("board/convergence/comment/like", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
    getLists: async (body) => {
      const { docId, myEncryptedUid } = body;

      let uidDict = {};

      // 일반 댓글들 가져오기
      let commentsArr = await db
        .collection("convergence")
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
            // uid 묶음 만들기.
            if (uidDict[data.encryptedUid] === undefined) {
              uidDict[data.encryptedUid] = Object.keys(uidDict).length + 1;
            }
            let uidIndex = uidDict[data.encryptedUid];
            docsArray.push({
              commentId: doc.id,
              content: data.content,
              timestampDistance: distanceText,
              encryptedUid: data.encryptedUid,
              timestampMillis: data.timestamp.toMillis(),
              likeCount: data.likes_count,
              subCommentsExist: data.subCommentsExist,
              subComments: [],
              uidIndex,
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
                  .collection("convergence")
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
                  // uid 묶음 만들기.
                  if (uidDict[data.encryptedUid] === undefined) {
                    uidDict[data.encryptedUid] =
                      Object.keys(uidDict).length + 1;
                  }
                  let uidIndex = uidDict[data.encryptedUid];
                  commentsArr[idx].subComments.push({
                    subcommentId: doc.id,
                    encryptedUid: data.encryptedUid,
                    content: data.content,
                    timestampDistance: distanceText,
                    timestampMillis: data.timestamp.toMillis(),
                    likeCount: data.likes_count,
                    uidIndex,
                  });
                });
                // 각 대댓글들에서 본인이 좋아요 눌렀는지 확인.
                await Promise.all(
                  commentsArr[idx].subComments.map(async (subItem, subIdx) => {
                    commentsArr[idx].subComments[subIdx].didILiked = await db
                      .collection("convergence")
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
                .collection("convergence")
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
      api.post("board/convergence/subcomment/create", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
    reportSubComment: (body) =>
      api.post("board/convergence/comment/report", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
    deleteSubComment: (body) =>
      api.post("board/convergence/subcomment/delete", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
    likeSubComment: (body) =>
      api.post("board/convergence/subcomment/like", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
  },
};

export const departMajorApi = {
  getLists: async (body) => {
    const { size, startAfterDocId, subject } = body;
    if (!startAfterDocId) {
      if (subject !== undefined && subject !== "" && subject !== "NONE") {
        const querySnapshot = await db
          .collection("departMajor")
          .where("subject", "==", subject)
          .orderBy("timestamp", "desc")
          .limit(size)
          .get();
        let docsArray = [];
        querySnapshot.forEach((doc) => {
          let data = doc.data();

          if (data.report_count >= 5) {
            return;
          }

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
            nickname: data.nickname,
            timestampDistance: distanceText,
            timestampMillis: data.timestamp.toMillis(),
            commentCount: data.comments_count,
            likeCount: data.likes_count,
            subject: data.subject,
            encryptedUid: data.encryptedUid,
          });
        });
        return docsArray;
      } else {
        const querySnapshot_1 = await db
          .collection("departMajor")
          .orderBy("timestamp", "desc")
          .limit(size)
          .get();
        let docsArray_1 = [];
        querySnapshot_1.forEach((doc_1) => {
          let data_1 = doc_1.data();

          if (data_1.report_count >= 5) {
            return;
          }

          let distanceText_1 = formatDistanceToNow(
            data_1.timestamp.toMillis(),
            {
              locale: ko,
            }
          ).replace("약 ", "");
          if (distanceText_1.includes("미만")) {
            distanceText_1 = "방금";
          }
          docsArray_1.push({
            docId: doc_1.id,
            title: data_1.title,
            content: data_1.content,
            nickname: data_1.nickname,
            timestampDistance: distanceText_1,
            timestampMillis: data_1.timestamp.toMillis(),
            commentCount: data_1.comments_count,
            likeCount: data_1.likes_count,
            subject: data_1.subject,
            encryptedUid: data_1.encryptedUid,
          });
        });
        return docsArray_1;
      }
    } else {
      // 더 보기를 누른 상태이면.
      const startAfterDoc = await db
        .collection("departMajor")
        .doc(startAfterDocId)
        .get();
      if (subject !== undefined && subject !== "" && subject !== "NONE") {
        const querySnapshot_2 = await db
          .collection("departMajor")
          .where("subject", "==", subject)
          .orderBy("timestamp", "desc")
          .startAfter(startAfterDoc)
          .limit(size)
          .get();
        let docsArray_2 = [];

        querySnapshot_2.forEach((doc_2) => {
          let data_2 = doc_2.data();

          if (data_2.report_count >= 5) {
            return;
          }

          let distanceText_2 = formatDistanceToNow(
            data_2.timestamp.toMillis(),
            {
              locale: ko,
            }
          ).replace("약 ", "");
          if (distanceText_2.includes("미만")) {
            distanceText_2 = "방금";
          }
          docsArray_2.push({
            docId: doc_2.id,
            title: data_2.title,
            content: data_2.content,
            nickname: data_2.nickname,
            timestampDistance: distanceText_2,
            timestampMillis: data_2.timestamp.toMillis(),
            commentCount: data_2.comments_count,
            likeCount: data_2.likes_count,
            subject: data_2.subject,
            encryptedUid: data_2.encryptedUid,
          });
        });
        return docsArray_2;
      } else {
        const querySnapshot_3 = await db
          .collection("departMajor")
          .orderBy("timestamp", "desc")
          .startAfter(startAfterDoc)
          .limit(size)
          .get();
        let docsArray_3 = [];
        querySnapshot_3.forEach((doc_3) => {
          let data_3 = doc_3.data();

          let distanceText_3 = formatDistanceToNow(
            data_3.timestamp.toMillis(),
            {
              locale: ko,
            }
          ).replace("약 ", "");
          if (distanceText_3.includes("미만")) {
            distanceText_3 = "방금";
          }
          docsArray_3.push({
            docId: doc_3.id,
            title: data_3.title,
            content: data_3.content,
            nickname: data_3.nickname,
            timestampDistance: distanceText_3,
            timestampMillis: data_3.timestamp.toMillis(),
            commentCount: data_3.comments_count,
            likeCount: data_3.likes_count,
            subject: data_3.subject,
            encryptedUid: data_3.encryptedUid,
          });
        });
        return docsArray_3;
      }
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
  report: (body) =>
    api.post("board/departmajor/report", body, {
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
    report: (body) =>
      api.post("board/departmajor/comment/report", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
    delete: (body) =>
      api.post("board/departmajor/comment/delete", body, {
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
      const { docId, myEncryptedUid } = body;

      let uidDict = {};

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
            // uid 묶음 만들기.
            if (uidDict[data.encryptedUid] === undefined) {
              uidDict[data.encryptedUid] = Object.keys(uidDict).length + 1;
            }
            let uidIndex = uidDict[data.encryptedUid];
            docsArray.push({
              commentId: doc.id,
              content: data.content,
              timestampDistance: distanceText,
              encryptedUid: data.encryptedUid,
              timestampMillis: data.timestamp.toMillis(),
              likeCount: data.likes_count,
              subCommentsExist: data.subCommentsExist,
              subComments: [],
              uidIndex,
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
                  // uid 묶음 만들기.
                  if (uidDict[data.encryptedUid] === undefined) {
                    uidDict[data.encryptedUid] =
                      Object.keys(uidDict).length + 1;
                  }
                  let uidIndex = uidDict[data.encryptedUid];
                  commentsArr[idx].subComments.push({
                    subcommentId: doc.id,
                    encryptedUid: data.encryptedUid,
                    content: data.content,
                    timestampDistance: distanceText,
                    timestampMillis: data.timestamp.toMillis(),
                    likeCount: data.likes_count,
                    uidIndex,
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
    reportSubComment: (body) =>
      api.post("board/departmajor/comment/report", body, {
        headers: {
          Authorization: getBearer(),
        },
      }),
    deleteSubComment: (body) =>
      api.post("board/departmajor/subcomment/delete", body, {
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
      encryptedUid: data.encryptedUid,
      nickname: data.nickname,
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
  sendSuggestion: async (body) => api.post("suggestions", body),
};
