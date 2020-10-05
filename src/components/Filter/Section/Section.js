import React, { useState } from 'react';
import styles from './Section.module.scss'
import { CaretDown, CaretUp } from 'components/Icons/Icons';

const SectionHead = ({ title, open, onClick }) => {
  const style = open ? " open" : ""
  const caret = open ? <CaretDown /> : <CaretUp />
  return (
    <div onClick={onClick} className={styles.head + style}>
      <div className={styles.title}>{title}</div><div className={styles.icon}>{caret}</div>
    </div>
  )
}


export const Section = ({ title, children, open = false }) => {
  const [isOpen, toggleOpen] = useState(open)
  const onClicked = () => {
    toggleOpen(!isOpen)
  }
  return (
    <div>
      <SectionHead title={title} open={isOpen} onClick={onClicked} />
      {isOpen && children}
    </div>
  )
}