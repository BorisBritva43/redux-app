import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { commentUpdate, commentDelete } from './redux/actions';

function SingleComment({ data }) {

   const [commentText, setCommentText] = useState('');
   const { text, id } = data;
   const dispatch = useDispatch();

   const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(commentUpdate(commentText, id));
   }

   const handleDelete = (e) => {
      e.preventDefault();
      dispatch(commentDelete(id));
   }

   useEffect(() => {
      if (text) {
         setCommentText(text);
      }
   }, [text]);

   const onHandleInput = (event) => {
      setCommentText(event.target.value);
   }

   return (
      <form
         className="comments-item"
         onSubmit={handleUpdate}
      >
         <input
            type="text"
            value={commentText}
            onChange={onHandleInput}
         />
         <input type="submit" hidden />
         <div
            className="comments-item-delete"
            onClick={handleDelete}
         >
            &times;
         </div>
      </form>
   )
}

export default SingleComment;