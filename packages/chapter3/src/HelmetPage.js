import React from 'react'
import { useNavigate } from 'react-router-dom'
const HelmetPage = () => {
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate('/')
  }
  return (
    <div>
      <div>
        HelmetPage
        </div>

    <button onClick={clickHandler}>GO MainPage</button>
    </div>
  )
}

export default HelmetPage