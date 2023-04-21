import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// contexts
import SettingsProvider from "./contexts/SettingsContext";
import { store } from "./redux/slices/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ContextProvider } from "./Videocall/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ContextProvider>
  <React.StrictMode>
     
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <SettingsProvider>
            <BrowserRouter>
              {/* <ContextProvider> */}
                <App />
              {/* </ContextProvider> */}
            </BrowserRouter>
          </SettingsProvider>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
  </ContextProvider>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
