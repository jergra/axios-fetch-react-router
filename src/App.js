import React from 'react'
import './App.css';
import UsersList from './components/UsersList.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DisplayUser from './components/DisplayUser.js'

function App() {
  return (
    <div>
      <Router>
        <Routes>

{/* note that :index below could be :anything. the colon is what is important.
the reason the index appears in the url is because of UsersList.js line 25
i.e. to={`/profile/${index}`}   */}

          <Route path="/profile/:index" element={<DisplayUser />} />
          <Route path="/" element={<UsersList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
