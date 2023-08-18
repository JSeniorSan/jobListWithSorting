import { Provider } from "react-redux";
import React from "react";
import { store } from "./store/index";
import App from "./App";
function RootProviders() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
export default RootProviders;
