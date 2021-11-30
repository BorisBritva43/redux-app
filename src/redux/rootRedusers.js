import { combineReducers } from "redux";
import { likesReduser } from "./likesReduser";
import { inputReduser } from "./inputReduser";
import { commentsReduser } from "./commentsReduser";

export const rootReducer = combineReducers({
   likesReduser,
   inputReduser,
   commentsReduser
});