import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "ADD_POST") {

    newPostList = [action.payload, ...currPostList];
   
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    Default_Post_List,
  );

  const addPost = (userId, postBody, postTitle, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userid: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const Default_Post_List = [
  {
    id: "1",
    title: "Vaccational Trip",
    body: "hiii everyone i am going to tell you about my vaccation that was so amaxing",
    reaction: "5",
    userid: "user-9",
    tags: ["vaccation", "vlog"],
  },
  {
    id: "2",
    title: "VrindaVan Trip",
    body: "its all about  that was so amazing and so adventure things was happened",
    reaction: "16",
    userid: "user-9",
    tags: ["vaccation", "Travelling"],
  },
];

export default PostListProvider;
