import { COMMENT_CREATE, COMMENT_UPDATE } from "./types";

// Дефолтное состояние для этого редюсера
const initialState = {
   comments: []
}

export const commentsReduser = (state = initialState, action) => {
   switch (action.type) {
      case COMMENT_CREATE:
         return {
            ...state,
            comments: [...state.comments, action.data]
         }
      case COMMENT_UPDATE:
         const { data } = action;
         const { comments } = state;
         const itemIndex = comments.indexOf(res => res.id === data.id);

         const nextComment = [
            ...comments.slice(0, itemIndex),
            data,
            ...comments.slice(itemIndex + 1)
         ];

         return {
            ...state,
            comments: nextComment
         }
      default:
         return state;
   }
}