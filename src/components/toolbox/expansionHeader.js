import React from 'react'
import PropTypes from 'prop-types'
import './expansionList.scss'


export default function ExpansionHeader({ title, open, callback, children }) {
  const style = open ? "expansion-header open" : "expansion-header"
  const caret = open ? <CaretDown/> : <CaretUp />
  return (
    <div className={style} onClick={callback}>
      <span>{title}</span>{caret}
    </div>
  )
}
ExpansionHeader.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool
}
ExpansionHeader.defaultProps = {
  title: "Art",
  callback: (() => console.log("expansion header clicked"))
}
export function CaretUp() {
  return (
    <span className="lt-icon lt-caret-up" role="img" aria-label="caret up icon">
      <svg className="" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41 15.7049L12 11.1249L16.59 15.7049L18 14.2949L12 8.29492L6 14.2949L7.41 15.7049Z" fill="#4F4F4F" />
      </svg>
    </span>
  )
}
export function CaretDown() {
  return (
    <span className="lt-icon lt-caret-down" role="img" aria-label="caret down icon">
      <svg className="" width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41 8.29492L12 12.8749L16.59 8.29492L18 9.70492L12 15.7049L6 9.70492L7.41 8.29492Z" fill="#4F4F4F" />
      </svg>
    </span>
  )
}