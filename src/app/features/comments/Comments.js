import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./commentsSlice";
import { selectAllComments } from "./commentsSlice";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectAllComments);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h1>{comment.name}</h1>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
