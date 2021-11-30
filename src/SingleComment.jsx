import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { commentUpdate } from './redux/actions';

function SingleComment({ data }) {

   const [commentText, setCommentText] = useState('');
   const { text, id } = data;
   const dispatch = useDispatch();

   const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(commentUpdate(commentText, id));
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
         <div className="comments-item-delete">&times;</div>
      </form>
   )
}

export default SingleComment;