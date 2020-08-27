import React, { useState, useEffect } from 'react';
import styles from './Imageviewer.module.scss'
import {MapInteractionCSS} from 'react-map-interaction'

export const Imageviewer = ({image, callback}) => {

  const [state, setState] = useState({
    value: {
      scale: 1,
      translation: {x:0,y:0}
    },
    item: undefined,
    isLoaded: false
  })

  useEffect(() => {
    fetch(image)
      .then(
        (res) => {
        setState({isLoaded:true})
        console.log(res)
      })
    let scrollTop = document.getElementById('textPDF').contentWindow.document.body.scrollTop;
    console.log(scrollTop)
  },[image])

  const onChange = (newState) => {
    console.log(newState)
    // newState.value.translation.x = 0
    setState(newState)
  }
  

  return (
    <div className={styles.container}>
      <div>
        <iframe id='textPDF' className={styles.pdf} src={image}></iframe>
      </div>
      {state.isLoaded && <div className={styles.test}>PETER</div>}
    </div>
  )
}


//https://chost20.zim.uni-wuppertal.de/api/facsimile/FE_06.1_22051791.pdfo