import React from 'react'
import './App.css';
import UsersList from './components/UsersList.js';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import DisplayUser from './components/DisplayUser.js'
import About from './components/About.js'

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
              <div>
                <Link style={{textDecoration: 'none'}} to="/">Home</Link>
              </div>
              <div>
                <Link style={{textDecoration: 'none'}} to="/about">About</Link>
              </div>
          </nav>
        
          {/* Note that :index below could be :anything. 
          The colon is what is important. The actual index number appears in the url 
          because of UsersList.js line 39: to={`/profile/${index}`}   
          If line 31 below were:
            <Route path="/profile/:whatever" element={<DisplayUser />} />
          it would still be the index number that we would see in the url. */}

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/profile/:index" element={<DisplayUser />} />
            <Route path="/" element={<UsersList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
