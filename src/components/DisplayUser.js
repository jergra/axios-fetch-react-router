import React from 'react'
import {useLocation} from 'react-router-dom'
import '../App.css'

export default function DisplayUser() {
  
  const {state} = useLocation()
  console.log('state:', state)
  console.log('state.element:', state.element)
  const name = state.element.name.first
  const pic = state.element.picture.large
  
  return (
    <div className="centerUser">
        <h3>Profile</h3>
        <img src={pic} alt="" />
        <div>{name}</div>
    </div>
  );
}


