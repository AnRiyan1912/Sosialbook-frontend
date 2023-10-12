import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./redux/reducers";
import thunk from "redux-thunk";
import { Provider, useDispatch } from "react-redux";
import { AuthProvider } from "./hoc/auth-provider";
import { api } from "./api/axios";
import { userLogin } from "./redux/middlewares/auth-middlewares";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({ reducer: rootReducers, middleware: [thunk] });

if (localStorage.getItem("auth")) {
  const fetchUserForKeepLogin = async () => {
    const token = localStorage.getItem("auth");
    try {
      await api
        .get("/auth/token", { params: { token: token } })
        .then(async (values) => {
          if (values) {
            localStorage.removeItem("auth");
            store.dispatch(userLogin(values));
            // console.log(values.data);
          }
        });
    } catch (err) {
      localStorage.removeItem("auth");
      window.location.href = "/login";
      console.log(err?.message);
    }
  };
  fetchUserForKeepLogin();
}

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
