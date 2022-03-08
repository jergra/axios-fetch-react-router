import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import axios from 'axios'

export default function UsersList() {
  const [resultsAxios, setResultsAxios] = useState([])
  const [resultsFetchAsync, setResultsFetchAsync] = useState([])
  const [resultsFetchThen, setResultsFetchThen] = useState([])

  useEffect(() => {
    const AxiosGetData = () => {
    // function AxiosGetData() {
      return axios.get('https://randomuser.me/api/?results=10')
      .then((res) => {
          console.log("res.data.results: :", res.data.results)
          setResultsAxios(res.data.results)
      })
    }
    AxiosGetData()
  }, [])

  useEffect(() => {
    //const FetchAsyncGetData = async () => {
    async function FetchAsyncGetData() {
        const res = await fetch('https://randomuser.me/api/?results=10')
        const myJSON = await res.json()
        console.log('myJSON.results:', myJSON.results)
        setResultsFetchAsync(myJSON.results)
    }
    FetchAsyncGetData()
  }, [])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(myJSON => {
        console.log(myJSON.results)
        setResultsFetchThen(myJSON.results)
      })
  }, [])

  return (
    <div className="center">
      
      <div className="list">
        <h3>Axios</h3>
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
      
      <div className="list">
        <h3>Fetch Async/Await</h3>
        <div>
          {resultsFetchAsync.map((element, index) => (
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

      <div className="list">
        <h3>Fetch Then</h3>
        <div>
          {resultsFetchThen.map((element, index) => (
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

