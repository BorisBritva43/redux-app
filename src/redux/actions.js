import { INCREMENT, DECREMENT, INPUT_TEXT, COMMENT_CREATE, COMMENT_UPDATE } from './types';

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