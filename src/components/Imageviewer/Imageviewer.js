import React, { useState, useEffect, useRef } from 'react';
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
  const [file, setFile] = useState(image)

  const pdfRef = useRef()

  useEffect(() => {
    console.log("ref is ", pdfRef.current)
    const el = pdfRef.current
    el.addEventListener('click', () => console.log("click"))
    fetch(image)
      .then(
        (res) => {
        setState({isLoaded:true})
        console.log(res)
      })
    // let scrollTop = document.getElementById('textPDF').contentWindow.document.body.scrollTop;
    // console.log(scrollTop)
  },[image])

  const onChange = (newState) => {
    console.log(newState)
    // newState.value.translation.x = 0
    setState(newState)
  }
  

  return (
    <div className={styles.container}>
      <div>
        {/* <iframe id='textPDF' className={styles.pdf} src={image}></iframe> */}
        <embed id='textPDF' ref={pdfRef} src={image} type="application/pdf" view='fit' width="100%" height="600px" />
      </div>
      {/* {state.isLoaded && <div className={styles.test}>PETER</div>} */}
    </div>
  )
}

//<embed src="files/Brochure.pdf" type="application/pdf" width="100%" height="600px" />

//https://chost20.zim.uni-wuppertal.de/api/facsimile/FE_06.1_22051791.pdf