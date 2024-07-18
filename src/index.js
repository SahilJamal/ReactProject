import ReactDOM from "react-dom";
import App from "./App.js";
import ContextApi from "./Shpping_cart/ContextApi.js";
import store from "./Store/index-tool-kit.js";
import { Provider } from "react-redux";

ReactDOM.render(
  <ContextApi>
    <Provider store={store}>
      <App />
    </Provider>
  </ContextApi>,
  document.getElementById("root")
);
