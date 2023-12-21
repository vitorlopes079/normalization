import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments, deleteComment } from "./commentsSlice";
import { selectAllComments } from "./commentsSlice";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectAllComments);


  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

 function deleteCommentById(id){
  dispatch(deleteComment(id))
  }

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h1>{comment.name}</h1>
          <p>{comment.body}</p>
          <button onClick={() => deleteCommentById(comment.id)}>Delete</button>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Comments;
