import React from 'react'
import { Imageviewer } from '../../Imageviewer/Imageviewer'
import css from './Normalview.module.scss'

export class Normalview extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      success: this.props.data.succeess,
      xml: this.props.data.data,
      html: this.getLetterHtml().querySelector('letter').innerHTML,
    }
  }

  getLetterHtml (html) {
    const el = document.createElement('div')
    el.innerHTML = this.props.data.html

    return el
  }

  render () {
    return (
      <div className={css.row}>
        <div className={`${css['col-12']} ${css['col-lg-6']}`}>
          <Imageviewer image={ "https://chost20.zim.uni-wuppertal.de/api/facsimile/FE_06.1_22051791.pdf" }/>
        </div>
        <div className={`${css['col-12']} ${css['col-lg-6']}`} dangerouslySetInnerHTML={ {
          __html: this.state.html
        } }>
        </div>
      </div>
    )
  }
}
