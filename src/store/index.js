import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReduser from "./reducers/";

export default function configureStore() {
  return createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)));
}
