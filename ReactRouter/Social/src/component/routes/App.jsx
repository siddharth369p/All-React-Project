import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Sidebar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";
import PostListProvider from "./store/post-list-store";
import PostList from "./component/PostList";
import { useState } from "react";


function App() {
  const [selectedTab,setSelectedTab]=useState("Home");
  return (
    <PostListProvider>
    <div className="app-container">
       <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/> 
       <div className="content">
      <Header />
      {selectedTab==='Home'? <PostList/>:<CreatePost setSelectedTab={setSelectedTab}/>}
      
      <Footer />
      </div>
      </div>
    </PostListProvider>

  );
};

export default App;
