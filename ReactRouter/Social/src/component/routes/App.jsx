import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

import PostListProvider from "../../store/post-list-store"; 

import { useState } from "react";


function App() {
  const [selectedTab,setSelectedTab]=useState("Home");
  return (
    <PostListProvider>
    <div className="app-container">
       <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/> 
       <div className="content">
       <Header/>
      <Outlet/>
      <Footer />
      </div>
      </div>
    </PostListProvider>

  );
};

export default App;
