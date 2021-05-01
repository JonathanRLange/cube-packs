import React, { Component } from "react"

class Input extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Cards per color</label>
          <input
            type="number"
            value={this.props.colorCount}
            onChange={this.props.onColorCountChange}
          />
        </div>
        <div>
          <label>Colorless Count</label>
          <input
            type="number"
            value={this.props.colorlessCount}
            onChange={this.props.onColorlessCountChange}
          />
        </div>
        <div>
          <label>Multicolour Count</label>
          <input
            type="number"
            value={this.props.multicolorCount}
            onChange={this.props.onMulticolorCountChange}
          />
        </div>
        <button onClick={this.props.onSubmit} type="submit">
          Submit
        </button>
      </form>
    )
  }
}

export default Input
