// import logo from './logo.svg'; // eslint-disable-next-line
// import './App.css';
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import UserBox from "./components/UserBox";
// import rootReducer from "./reducers";
import phoneBookReducers from "./reducers/phoneBook_reducers";

const store = createStore(phoneBookReducers, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <UserBox />
    </Provider>
  );
}
