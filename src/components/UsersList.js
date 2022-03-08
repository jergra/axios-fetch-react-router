import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export default function UsersList() {
  const [results, setResults] = useState([])

  useEffect(() => {
      const wrapper = async () => {
          const res = await fetch('https://randomuser.me/api/?results=10')
          const fetchRes = await res.json()
          setResults(fetchRes.results)
          console.log('fetchRes:', fetchRes)
      }
      wrapper()
  }, [])

  return (
    <div className="centerUsers">
      <h1>Users List</h1>
      <div>
        {results.map((element, index) => (
          <li key={index}>
            <Link
              to={`/profile/${index}`}
              state={{element: element}}>
              {element.name.first} {element.name.last}
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}

