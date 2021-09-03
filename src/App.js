import React, { useEffect } from "react";
import PublicRoute from "./Pages/Routes/PublicRoute";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "ladda/dist/ladda-themeless.min.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <PublicRoute />
    </Provider>
  );
}

export default App;
