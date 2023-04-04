import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css?ver=1"

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

const persistor = persistStore(store);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
