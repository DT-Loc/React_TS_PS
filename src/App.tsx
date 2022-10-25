import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route } from "core/router";
import { store } from "./core/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Route />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
