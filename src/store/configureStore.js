import { combineReducers, createStore } from "redux";
import { formReducer } from "./reducers/formReducer";
import { resultReducer } from "./reducers/resultReducer";
import { userReducer } from "./reducers/userReducer";

export default () => {
  //Build
//   let store = createStore(
//     combineReducers({
//       form: formReducer,
//       user: userReducer,
//       result: resultReducer,
//     }),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

  let store = createStore(
    combineReducers({
      form: formReducer,
      user: userReducer,
      result: resultReducer,
    })
  );

  return store;
};
