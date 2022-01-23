import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { store } from "./app/store";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Preloader from "./components/Preloader";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<Preloader />}>
          <App />
        </Suspense>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
