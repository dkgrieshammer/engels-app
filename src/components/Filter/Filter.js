import React, { useState } from 'react'
import PropTypes from "prop-types";
import { Card } from './Card/Card';
import { Head } from './Head/Head';

export default function Toolbox({ title }) {

  const [visible, toggleVisible] = useState(false)
  return (
    <>
      {visible && <ToolboxButton title={title} callback={() => toggleVisible(!visible)} />}
      {!visible && <Card>
        <Head title="Toolbox" callback={() => toggleVisible(!visible)} />
      </Card>
      }
    </>
  )
}


function ToolboxButton({ title, callback, style }) {
  return (
    <button type="button" style={style} className="btn btn-light" onClick={callback}>{title}</button>
  )
}

Toolbox.propTypes = {
  title: PropTypes.string
}

Toolbox.defaultProps = {
  title: "Toolbox"
};