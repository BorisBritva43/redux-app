import { INPUT_TEXT } from "./types";

// Дефолтное состояние для этого редюсера
const initialState = {
   text: ''
}

export const inputReduser = (state = initialState, action) => {
   switch (action.type) {
      case INPUT_TEXT:
         return {
            ...state,
            text: action.text
         }
      default:
         return state;
   }
}