import React from 'react'
import './loading.css'

const Loading = () => {
  return (
    <>
    <div className="load">
  <div className="loader">
    <div className="loader--dot"></div>
    <div className="loader--dot"></div>
    <div className="loader--dot"></div>
    <div className="loader--dot"></div>
    <div className="loader--dot"></div>
    <div className="loader--dot"></div>
    <div className="loader--text"></div>
  </div>
</div>
    </>
  )
}

export default Loading;