import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

import { useLoaderData } from "react-router-dom";

const PostList = () => {
   const postList=useLoaderData();

  // const [fetching, setFetching] = useState(false);
  

  // useEffect(() => {
  //   setFetching(true);
  //   const controller=new AbortController();
  //   const signal=controller.signal;

   
  //   fetch("https://dummyjson.com/posts",{signal})
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //       setFetching(false);
  //     });

  //     return ()=>{
  //       console.log("the cleaning function of useeffectin is working")
  //       controller.abort()
  //     }
  // }, []);

  return (
    <>
     
      {postList.length === 0 && <WelcomeMessage />}
      { postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export const postLoader=()=>{
  return fetch("https://dummyjson.com/posts")
  .then((res)=>res.json())
  .then((data)=>{
    return data.posts
  })
}

export default PostList;

