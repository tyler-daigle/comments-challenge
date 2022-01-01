import { useState } from "react";

function Comment({ comment }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="commentContainer">
      <h2 onClick={() => setCollapsed(!collapsed)}>Comment</h2>

      {!collapsed && (
        <div>
          <p>{comment.content}</p>
          {comment.replies && comment.replies.length !== 0 && (
            <CommentList commentList={comment.replies} />
          )}
        </div>
      )}
    </div>
  );
}

export default function CommentList({ commentList }) {
  return (
    <ul>
      {commentList.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
}
