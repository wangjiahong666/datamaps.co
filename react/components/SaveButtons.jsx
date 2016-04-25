import React, { Component } from 'react'
import { saveSvgAsPng } from 'save-svg-as-png'

export default class SaveButtons extends Component {
  handleSaveSvg() {
    alert('handleSaveSvg')
  }

  handleSavePng() {
    const options = { scale: 3, backgroundColor: 'white' }
    saveSvgAsPng(document.getElementsByTagName('svg')[0], 'datamapsco.png', options);
  }

  render() {
    return (
      <div>
        <button className="button btn-svg" onClick={this.handleSaveSvg}>Save svg</button>
        <button className="button btn-png" onClick={this.handleSavePng}>Save png</button>
      </div>
    )
  }
}