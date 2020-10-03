import React, { useState } from 'react';
import styles from './PDF.module.scss'
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PDF = ({file}) => {

  const [scale, setScale] = useState(1.5)
  const [numPages, setNumPages] = useState(null)

  function onDocumentLoad({numPages}) {
    setNumPages(numPages)
  }
 
  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoad}
        >
          
        <Page
          pageNumber={1}
          scale={scale}
        />

      </Document>
      <div className={styles.nav}>
      <button onClick={() => setScale(scale + 0.1)}>+ Bigger</button>
      <button onClick={() => setScale(scale - 0.1)}>- Smaller</button>
      </div>
    </div>
  )
}