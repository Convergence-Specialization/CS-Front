import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "antd/dist/antd.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
