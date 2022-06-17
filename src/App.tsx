import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GasSystem from "./modules";
import { Provider } from "react-redux";
import configureStore, { sagaMiddleware } from "./app/store";
import rootSaga from "./sagas";

function App() {
  const store = configureStore();
  sagaMiddleware.run(rootSaga);
  return (
    <div className="App">
      <Provider store={store}>
        <GasSystem />
      </Provider>
    </div>
  );
}

export default App;
