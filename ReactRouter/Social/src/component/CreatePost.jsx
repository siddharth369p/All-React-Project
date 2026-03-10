import { Form, redirect } from "react-router";


const CreatePost = () => {


  return (
    <>
      <Form method="POST" className="create-post" >
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your user ID here
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="How are you today"
            name="userId"
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
            name="postTitle"
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
            name="postBody"
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
            name="reactions"
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
            name="tags"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </>
  );
};

export async function createPostAction(data){
   const formData= await data.request.formData();
    const postData=  Object.fromEntries(formData);
    postData.tags=postData.tags.split(" ");


  fetch("https://dummyjson.com/posts/add", {
    method: "Post",
    headers: { "content-Type": "application/json" },
    body:JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
    console.log(post)
   
    });
return redirect("/")
};

export default CreatePost;
