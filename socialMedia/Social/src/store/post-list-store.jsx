import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, Default_Post_List);

  const addPost = () => {};
  const deletePost = (postId) => {
    console.log("you click on delete post")
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


     const Default_Post_List=[
      {
      id:'1',
      title:"Vaccational Trip",
      body:"hiii everyone i am going to tell you about my vaccation that was so amaxing",
      reaction:"5",
      userid:"user-9",
      tags:["vaccation","vlog"]
     },
        {
      id:'2',
      title:"VrindaVan Trip",
      body:"its all about  that was so amazing and so adventure things was happened",
      reaction:"16",
      userid:"user-9",
      tags:["vaccation","Travelling"]
     },
    ]

export default PostListProvider;