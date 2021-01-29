import { useEffect, useState } from "react";
import { authService } from "../firebase";

export const useAuth = () => {
  const fireUser = authService.currentUser;
  const [user, setUser] = useState(fireUser);

  useEffect(() => {
    const unsub = authService.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
    return () => {
      unsub();
    };
  });
  return user;
};
