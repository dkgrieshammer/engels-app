import React, { useState } from 'react'
import PropTypes from "prop-types";
import css from './toolbox.module.scss'
import ExpansionList from './expansionList';
import CloseButton from '../closeButton/closeButton';

export default function Toolbox({ title }) {

  const [visible, toggleVisible] = useState(false)
  return (
    <>
      {visible && <ToolboxButton title={title} callback={() => toggleVisible(!visible)} />}
      {!visible && <div className={css.toolbox}>
        <div className={css.header}>
          <span className={css.title}>{title}</span>
          <CloseButton style={{ position: 'absolute', right: -3, top: -3 }} callback={() => toggleVisible(!visible)} />
        </div>
        <ExpansionList />
      </div>
      }
    </>
  )
}

Toolbox.propTypes = {
  title: PropTypes.string
}

Toolbox.defaultProps = {
  title: "Toolbox"
};

function ToolboxButton({ title, callback, style }) {
  return (
    <button type="button" style={style} className="btn btn-light" onClick={callback}>{title}</button>
  )
}