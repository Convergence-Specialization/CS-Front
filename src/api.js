import { dbInstance } from "./fbase";

const boardDB = {
  convergence: dbInstance().collection("convergence"),
  departMajor: dbInstance().collection("departMajor"),
};

export const boardApi = {
  convergence: "asdf",
  departMajor: {
    readList: async (startDoc = null) => {
      if (!startDoc) {
        return boardDB.departMajor
          .orderBy("timestamp", "desc")
          .limit(10)
          .get()
          .then((querySnapshot) => {
            let dataArray = [];
            querySnapshot.forEach((doc) => {
              dataArray.push({ ...doc.data(), id: doc.id });
            });
            return {
              result: "success",
              body: dataArray,
            };
          })
          .catch((err) => {
            return {
              result: "failed",
              body: err,
            };
          });
      } else {
        return boardDB.departMajor
          .orderBy("timestamp", "desc")
          .startAfter(startDoc)
          .limit(10)
          .get()
          .then((querySnapshot) => {
            let dataArray = [];
            querySnapshot.forEach((doc) => {
              dataArray.push(doc.data());
            });
            return {
              result: "success",
              body: dataArray,
            };
          })
          .catch((err) => {
            return {
              result: "failed",
              body: err,
            };
          });
      }
    },
    create: async (title, body) => {
      return await boardDB.departMajor
        .add({
          title,
          body,
          // author: currentUser,
          timestamp: dbInstance.FieldValue.serverTimestamp(),
        })
        .then((doc) => {
          return {
            result: "success",
            body: doc,
          };
        })
        .catch((err) => {
          return {
            result: "failed",
            body: err,
          };
        });
    },
    read: async (title, body) => {
      
    },
    update: async (title, body) => {
      
    },
    delete: async (docId) => {
      boardDB.departMajor
        .doc(docId)
        .delete()
        .then((response) => {
          return {
            result: "success",
            body: response,
          };
        })
        .catch((err) => {
          return {
            result: "failed",
            body: err,
          };
        });
    },
  },
};
