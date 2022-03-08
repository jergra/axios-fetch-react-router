import React from 'react'
import '../App.css';

function About() {
  return (
    <div className="center">
      <div>
        <div>Get data from API using:</div>
        <ul>
          <li>Axios</li>
          <li>Fetch with 'async/await'</li>
          <li>Fetch with 'then'</li>
        </ul>
          
        <div>Use of react-router to display an item selected from the data.</div>
        <div>React-router changed significantly with 6.0.0.</div>
      </div>
    </div>
  )
}

export default About
