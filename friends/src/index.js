import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { creatStore, applyMiddleware } from "redux";
import thunk from "react-redux";
import logger from "redux-logger";
import rootReducer from "./";

import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
