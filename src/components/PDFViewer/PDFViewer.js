import React, { useState, useRef, useEffect } from 'react';
import styles from './PDFViewer.module.scss'
import {usePdf} from '@mikecousins/react-pdf'

export const PDFViewer = ({file}) => {
  
  const [page, setPage] = useState(1)
  const [scale, setScale] = useState(1.5)
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  
  useEffect(() => {
    console.log("effect ",containerRef.current.offsetWidth)
    const el = containerRef.current
    const cWidth = el.offsetWidth
    const cHeight = el.offsetHeight
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    console.log(canvas)
    canvas.width = 3000
  },[])
  
  const onLoaded = (el) => {
    console.log("loaded ", containerRef.current.offsetWidth)
  }

  const {pdfDocument, pdfPage} = usePdf({
    file: file,
    page,
    canvasRef,
    scale: scale,
    onDocumentLoadSuccess: onLoaded
  })


 
  return (
    <div className={styles.container} ref={containerRef}>
      {!pdfDocument && <span>Loading...</span>}
      <canvas className={styles.canvas} style={{width:'100%', height:'100%'}} ref={canvasRef} />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className="pager">
            <li className="previous">
              <button onClick={() => setScale(scale - .5)}>
                Bigger
              </button>
            </li>
            <li className="next">
              <button
                onClick={() => setScale(scale + .5)}
              >
                Smaller
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}