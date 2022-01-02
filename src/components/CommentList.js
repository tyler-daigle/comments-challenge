import { useState } from "react";
import Comment from "./Comment";

// TODO: Move the collapsing to the <li>
export default function CommentList({ commentList }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <ul>
      {commentList.map((comment) => (
        <li key={comment.id}>
          <span onClick={() => setCollapsed(!collapsed)}>Comment</span>
          {!collapsed && (
            <>
              <Comment comment={comment} />
              {comment.replies && comment.replies.length !== 0 && (
                <CommentList commentList={comment.replies} />
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
