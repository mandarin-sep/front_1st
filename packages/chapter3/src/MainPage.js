import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const MainPage = () => {
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate('/helmet')
  }
  return (
    <div>
      <Helmet>
        <title>항해 과제</title>
        <meta property="og:title" content="항해 과제" />
  <meta property="og:description" content="항해 og 과제"/>
  <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4UJP8NHuKjQ34J-SqrUsOkUn4LgI4TQwFA3vAtqkvw&s" />
  <meta property="og:type" content="website" />
  <meta name="twitter:title" content="항해 트이따" />
  <meta name="twitter:description" content="항해 트이따 페이지" />
  <meta name="twitter:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4UJP8NHuKjQ34J-SqrUsOkUn4LgI4TQwFA3vAtqkvw&s" />
  <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div>
        MainPage
        </div>

    <button onClick={clickHandler}>GO HelmetPage</button>
    </div>
  )
}

export default MainPage