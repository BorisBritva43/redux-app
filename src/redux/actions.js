import {
   INCREMENT,
   DECREMENT,
   INPUT_TEXT,
   COMMENT_CREATE,
   COMMENT_UPDATE,
   COMMENT_DELETE,
   COMMENTS_LOAD,
   LOADER_DISPLAY_ON,
   LOADER_DISPLAY_OFF,
   ERROR_DISPLAY_ON,
   ERROR_DISPLAY_OFF
} from './types';

// ========= LIKE & DISLIKE =================
export function incrementLikes() {
   return {
      type: INCREMENT
   }
}

export function decrementLikes() {
   return {
      type: DECREMENT
   }
}

// ========= TITLE TEXT =================
export function inputText(text) {
   return {
      type: INPUT_TEXT,
      text
   }
}

// ========= COMMENT CREATE =================
export function commentCreate(text, id) {
   return {
      type: COMMENT_CREATE,
      data: { text, id }
   }
}

// ========= COMMENT UPDATE =================
export function commentUpdate(text, id) {
   return {
      type: COMMENT_UPDATE,
      data: { text, id }
   }
}

// ========= COMMENT DELETE =================
export function commentDelete(id) {
   return {
      type: COMMENT_DELETE,
      id
   }
}

// ========= LOADER ON =================
export function loaderOn(id) {
   return {
      type: LOADER_DISPLAY_ON
   }
}

// ========= LOADER OFF =================
export function loaderOff(id) {
   return {
      type: LOADER_DISPLAY_OFF
   }
}

// ========= ERROR ON =================
export function errorOn(text) {
   return dispatch => {
      dispatch({
         type: ERROR_DISPLAY_ON,
         text
      });

      setTimeout(() => {
         dispatch(errorOff());
      }, 2000)
   }
}

// ========= ERROR OFF =================
export function errorOff() {
   return {
      type: ERROR_DISPLAY_OFF
   }
}

// ========= COMMENT LOAD =================
export function commentsLoad(id) {
   return async dispatch => {
      try {
         dispatch(loaderOn());
         const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
         const jsonData = await response.json();
         dispatch({
            type: COMMENTS_LOAD,
            data: jsonData
         });
         dispatch(loaderOff());
      } catch (err) {
         dispatch(errorOn('Ошибка API'));
         dispatch(loaderOff());
      }
   }
}