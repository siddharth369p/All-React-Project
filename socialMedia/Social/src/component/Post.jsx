import React, { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div
      className="card post-card position-relative"
      style={{ width: "30rem" }}
    >
      <div className="card-body">
        <h5 className="card-title position-relative">
          {post.title}

          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
            <span className="visually-hidden">unread messages</span>
          </span>
        </h5>

        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary me-1">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          The Post has been reacted by:{post.reaction}people
        </div>
      </div>
    </div>
  );
};

export default Post;
