import { combineReducers } from "redux";
import conferenceReducer from "./conferenceReducers";

/**
 * Reducer combined/attached i.e linking the reducer with the folder path for state managemnet.
 * combineReducers helps you keep the same logical division between reducers.
 */
export default combineReducers({
  conferenceReducer: conferenceReducer,
});
