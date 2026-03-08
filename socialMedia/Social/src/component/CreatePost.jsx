import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = ({ setSelectedTab }) => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    // console.log(userId,postTitle)

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTitle, postBody, reactions, tags);
  };
  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your user ID here
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="How are you today"
            ref={userIdElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="your post title please!!!!"
            ref={postTitleElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            placeholder="write something here "
            ref={postBodyElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions by people
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="reactions by others "
            ref={reactionsElement}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your hashtag here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="How are you today"
            ref={tagsElement}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
