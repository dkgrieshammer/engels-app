import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './expansionList.scss'
import ExpansionHead from './ExpansionHeader'


export default function ExpansionList({title}) {

  const [isOpen, toggleOpen] = useState(false)
  const style = isOpen ? {} : {display:'none'}

  return (
    <>
      <ExpansionHead title={title} open={isOpen} callback={()=>toggleOpen(!isOpen)}/>
      {/* <div style={style}>
      <SearchBox />
      <CheckListItem />
      </div> */}
    </>
  )
}

// CheckListItem

function CheckListItem({ title, checked, num, callback }) {
  const checkbox = checked ? <CheckBoxChecked /> : <CheckBox />
  const amount = num | 0
  return (
    <div className="check-list-item" onClick={() => callback()}>{checkbox} {title} <span className="lt-list-counter" aria-label="number of elements">{amount}</span></div>
  )
}
CheckListItem.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.object,
  num: PropTypes.number,
  callback: PropTypes.func
}
CheckListItem.defaultProps = {
  title: "Lorem Ipsum Dolor",
  callback: (() => null)
}

function CheckBox() {
  return (
    <span className="lt-icon lt-checkbox-empty" role="img" aria-label="checkbox unchecked">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM19 19V5H5V19H19Z" fill="#4F4F4F" />
      </svg>
    </span>
  )
}

function CheckBoxChecked() {
  return (
    <span className="lt-icon lt-checkbox-checked" role="img" aria-label="checkbox checked">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM16.58 7.58L17.99 9L9.99 17L5.99 13.01L7.41 11.6L9.99 14.17L16.58 7.58Z" fill="#4F4F4F" />
      </svg>
    </span>
  )
}

// Search Box

function SearchBox({placeholder, changeCallback}) {

  return (
    <div className="lt-search-input">
      <SearchIcon />
      <input onChange={(e) => changeCallback(e)} placeholder={placeholder} type="text" className="form-control" aria-label="Text Input to filter list items"></input>
    </div>
  )
}

function SearchIcon() {
  return (
    <span className="lt-icon lt-search-icon">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.965 14.255H15.755L20.745 19.255L19.255 20.745L14.255 15.755V14.965L13.985 14.685C12.845 15.665 11.365 16.255 9.755 16.255C6.165 16.255 3.255 13.345 3.255 9.755C3.255 6.165 6.165 3.255 9.755 3.255C13.345 3.255 16.255 6.165 16.255 9.755C16.255 11.365 15.665 12.845 14.685 13.985L14.965 14.255ZM5.255 9.755C5.255 12.245 7.26501 14.255 9.755 14.255C12.245 14.255 14.255 12.245 14.255 9.755C14.255 7.26501 12.245 5.255 9.755 5.255C7.26501 5.255 5.255 7.26501 5.255 9.755Z" fill="#4F4F4F" />
      </svg>
    </span>
  )
}
SearchBox.propTypes = {
  placeholder: PropTypes.string,
  changeCallback: PropTypes.func
}

SearchBox.defaultProps = {
  placeholder: "Search...",
  changeCallback: ((e) => console.log(e.target.value))
}