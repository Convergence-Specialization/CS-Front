import { useEffect, useState } from "react";
import { authService } from "../firebase";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import jwtDecode from "jwt-decode";
import message from "antd/lib/message";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NEED_PERMISSION_PATHS = [
  "/board/departmajor",
  "/board/convergence",
  "/board/announcement",
];

export const UseGoogleAnalytics = () => {
  const location = useLocation();
  const history = useHistory();
  const user = useAuth();

  const isPageInLoginRequired = (currentPath) => {
    let isPassed = false;
    NEED_PERMISSION_PATHS.forEach((path) => {
      if (path === currentPath) {
        isPassed = true;
      }
    });
    return isPassed;
  };

  useEffect(() => {
    ReactGA.initialize("UA-189137891-1");
  }, []);

  useEffect(() => {
    // 로그인 해야하는 페이지 접근할 때
    if (isPageInLoginRequired(location.pathname) && !user) {
      history.push("/login/loginrequire");
    }

    // GA 페이지 트레킹
    const currentPath = location.pathname + location.search;
    ReactGA.set({ page: currentPath });
    ReactGA.pageview(currentPath);

    // idToken 만료 확인 후 재발급.
    const idToken = localStorage.getItem("idToken");
    if (idToken !== null && idToken !== "") {
      if (jwtDecode(idToken).exp * 1000 < new Date().getTime()) {
        try {
          if (!authService.currentUser) return;
          authService.currentUser
            .getIdToken()
            .then((token) => localStorage.setItem("idToken", token))
            .catch((err) => message.error(err));
        } catch (err) {
          console.log(err);
        }
      }
    }
  }, [location, history, user]);
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
