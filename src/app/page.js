"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
      <PostOwner fullName="Nathapat Nerangsi" studentId="650610758"/>

        {/* Comment Example */}
      {/* <Comment userImagePath={comments[0].userImagePath} username={comments[0].username} commentText={comments[0].commentText} likeNum={comments[0].likeNum} replies={comments.replies} /> */}

        {/* Reply Example */}

      {
        comments.map((comment) => (
          <Comment userImagePath={comment.userImagePath} username={comment.username} commentText={comment.commentText} likeNum={comment.likeNum} replies={comment.replies} key={comment.username} />
        
      ))}
      </div>
    </div>
  );
}
