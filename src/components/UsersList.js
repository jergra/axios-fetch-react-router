import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import axios from 'axios'

export default function UsersList() {
  const [resultsAxios, setResultsAxios] = useState([])
  const [resultsFetch, setResultsFetch] = useState([])

  useEffect(() => {

    const AxiosGetData = () => {
      return axios.get('https://randomuser.me/api/?results=10')
      .then((res) => {
          console.log("res.data.results: :", res.data.results)
          setResultsAxios(res.data.results)
      })
    }
    AxiosGetData()

    const FetchGetData = async () => {
        const res = await fetch('https://randomuser.me/api/?results=10')
        const data = await res.json()
        console.log('data.results:', data.results)
        setResultsFetch(data.results)
    }
    FetchGetData()
  }, [])

  return (
    <div className="center">
      
      <div className="axios">
        <h1>From Axios</h1>
        <div>
          {resultsAxios.map((element, index) => (
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
      
      <div>
        <h1>From Fetch</h1>
        <div>
          {resultsFetch.map((element, index) => (
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
      
    </div>
  );
}

