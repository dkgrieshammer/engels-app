import React, { useState } from 'react';
import styles from './Search.module.scss'
import { SearchIcon } from 'components/Icons/Icons';

export const Searchbar = ({onChange, onEnter, placeholder="...Filter"}) => {

  const [term, changeTerm] = useState('')

  const handleChange = (e) => {
    changeTerm(e.target.value)
    onChange(e.target.value)
  }

  const handleEnter = () => {
    console.log("searching for ", term)
    onEnter(term)
  }

  return (
    <div className={styles.searchInput}>
      <button type="submit" onClick={handleEnter} className={styles.searchBtn}>
        <SearchIcon />
      </button>
      <input type="text" onChange={handleChange} placeholder={placeholder} />
    </div>
  )
}

export const Search = () => {

}
