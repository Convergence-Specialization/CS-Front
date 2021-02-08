import { useEffect, useState } from "react";
import { authService } from "../firebase";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import jwtDecode from "jwt-decode";
import { message } from "antd";

export const UseGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("G-KX5S63YY7N");
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
    const currentPath = location.pathname + location.search;
    ReactGA.set({ page: currentPath });
    ReactGA.pageview(currentPath);

    const idToken = localStorage.getItem("idToken");
    if (idToken !== null) {
      if (jwtDecode(idToken).exp * 1000 < new Date().getTime()) {
        authService.currentUser
          .getIdToken()
          .then((token) => localStorage.setItem("idToken", token))
          .catch((err) => message.error(err));
      }
    }
  }, [location]);
};

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
