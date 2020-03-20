import React from 'react'
import PropTypes from 'prop-types'
import './closeButton.scss'

export default function CloseButton({callback, style}) {
  
  return (
    <div className="lt-close-button" style={style} onClick={callback}> 
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#4F4F4F" />
      </svg>
    </div>
  )
}

CloseButton.defaultProps = {
  style: {},
  callback: (() => console.log("close clicked"))
}