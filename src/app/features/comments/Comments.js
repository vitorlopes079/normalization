import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, selectComments, selectCommentsLoading, selectCommentsError } from './commentsSlice';


const Comments = () => {
const dispatch = useDispatch();
const comments = useSelector(selectComments);
const loading = useSelector(selectCommentsLoading);
const error = useSelector(selectCommentsError);


useEffect(() => {
  dispatch(fetchComments())
}, [])

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;


  return (
    <div>
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.name}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Comments
