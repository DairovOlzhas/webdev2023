import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Post from './components/Post';
import Profile from './components/Profile';
import PostCreation from './components/PostCreation';
import EditPost from './components/EditPost';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const samplePosts = [
      { id: 1, text: 'This is post 1' },
      { id: 2, text: 'This is post 2' },
      { id: 3, text: 'This is post 3' },
    ];
    setPosts(samplePosts);
  }, []);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const editPost = (postId, newText) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, text: newText } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <PostCreation onAddPost={addPost} />
                <Feed posts={posts} onEditPost={editPost} />
              </div>
            }
          />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
