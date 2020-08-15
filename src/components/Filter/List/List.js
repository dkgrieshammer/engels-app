import React, { useRef } from 'react';
import styles from './List.module.scss'

function gen4() {
  return Math.random().toString(16).slice(-4)
}

export const List = ({children}) => <ul className={styles.listgroup}>{children}</ul>

export const ListElement = ({children, callback, num = 0}) => {
  return (
    <li><button onClick={callback}>{children}</button><span className={styles.num}>{num}</span></li>
  )
}

export const CheckboxElement = ({children, selected=false, callback, num = 0}) => {
  const uId = useRef(gen4())
  return (
    <li><input type="checkbox" id={uId.current} /><label for={uId.current} className={styles.checkmark}>{children}</label><span className={styles.num}>{num}</span></li>
  )
}

export const ColorCheckElement = ({children, selected=false, callback, color='#e7ca2a', num = 0}) => {
  const uId = useRef(gen4())
  return (
    <li className={`${styles.type}`}><input type="checkbox" id={uId.current} /><label for={uId.current} style={{backgroundColor:color}} className={styles.checkmark}>{children}</label><span className={styles.num}>{num}</span></li>
  )
}
