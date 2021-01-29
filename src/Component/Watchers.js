import { useEffect } from "react";

export const useAuth = () => {
  const fireUser = firebase.auth().currentUser;
  const [user, setUser] = useState(fireUser);

  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
    return () => {
      unsub();
    };
  });
  return user;
};
