import { createStore } from "redux";
import CounterReducer from "../Service/Reducer/CounterReducer";

const store=createStore(CounterReducer);
export default store;