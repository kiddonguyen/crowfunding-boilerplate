import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/configureStore";
const container = document.getElementById("root");
const root      = createRoot(container);

root.render(
  <Provider store={store}>
    {/* BrowserRouter sử dụng HTML5 History API để thay đổi URL và hiển thị các trang
    khác nhau trong ứng dụng của bạn mà không cần tải lại toàn bộ trang */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
