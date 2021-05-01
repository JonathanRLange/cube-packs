import React, { Component } from "react"
import Input from "./input"
import Results from "./results"

class CubePacks extends Component {
  state = {
    colorCount: 0,
    colorlessCount: 0,
    multicolorCount: 0,
    results: {
      whiteCount: 0,
      blueCount: 0,
      blackCount: 0,
      redCount: 0,
      greenCount: 0,
      multicolorNum: 0,
      colorlessNum: 0,
      allColors: 0,
      missTwo: 0,
      fivePlus: 0,
      sixPlus: 0,
    },
    simulationNumber: 0,
    isLoaded: false,
  }

  handleColorCountChange = event => {
    this.setState({
      colorCount: event.target.value,
    })
  }

  handleColorlessCountChange = event => {
    this.setState({
      colorlessCount: event.target.value,
    })
  }

  handleMulticolorCountChange = event => {
    this.setState({
      multicolorCount: event.target.value,
    })
  }

  handleSubmit = event => {
    var i
    var k
    const results = {
      whiteCount: 0,
      blueCount: 0,
      blackCount: 0,
      redCount: 0,
      greenCount: 0,
      multicolorNum: 0,
      colorlessNum: 0,
      allColors: 0,
      missTwo: 0,
      fivePlus: 0,
      sixPlus: 0,
    }
    for (i = 1; i < 10001; i++) {
      var white = 0
      var blue = 0
      var black = 0
      var red = 0
      var green = 0
      var multicolor = 0
      var colorless = 0
      for (k = 0; k < 15; k++) {
        var n = Math.ceil(
          Math.random() *
            (this.state.colorCount * 5 +
              parseInt(this.state.multicolorCount) +
              parseInt(this.state.colorlessCount))
        )
        if (n <= this.state.colorCount) {
          white++
        } else if (
          n > this.state.colorCount &&
          n <= this.state.colorCount * 2
        ) {
          blue++
        } else if (
          n > this.state.colorCount * 2 &&
          n <= this.state.colorCount * 3
        ) {
          black++
        } else if (
          n > this.state.colorCount * 3 &&
          n <= this.state.colorCount * 4
        ) {
          red++
        } else if (
          n > this.state.colorCount * 4 &&
          n <= this.state.colorCount * 5
        ) {
          green++
        } else if (
          n > this.state.colorCount * 5 &&
          n <= this.state.colorCount * 5 + parseInt(this.state.multicolorCount)
        ) {
          multicolor++
        } else {
          colorless++
        }
      }

      if (white > 0) {
        results.whiteCount++
      }
      if (blue > 0) {
        results.blueCount++
      }
      if (black > 0) {
        results.blackCount++
      }
      if (red > 0) {
        results.redCount++
      }
      if (green > 0) {
        results.greenCount++
      }
      if (colorless > 0) {
        results.colorlessNum++
      }
      if (multicolor > 0) {
        results.multicolorNum++
      }
      if (white > 0 && blue > 0 && black > 0 && red > 0 && green > 0) {
        results.allColors++
      }
      if (
        (white == 0 && blue == 0) ||
        (white == 0 && black == 0) ||
        (white == 0 && red == 0) ||
        (white == 0 && green == 0) ||
        (blue == 0 && black == 0) ||
        (blue == 0 && red == 0) ||
        (blue == 0 && green == 0) ||
        (black == 0 && red == 0) ||
        (black == 0 && green == 0) ||
        (red == 0 && green == 0)
      ) {
        results.missTwo++
      }
      if (white > 4 || blue > 4 || black > 4 || red > 4 || green > 4) {
        results.fivePlus++
      }
      if (white > 5 || blue > 5 || black > 5 || red > 5 || green > 5) {
        results.sixPlus++
      }

      this.setState({ simulationNumber: i })
    }

    this.setState({ results: results, isLoaded: true })
    event.preventDefault()
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <React.Fragment>
          <main className="container">
            <Input
              colorCount={this.state.colorCount}
              colorlessCount={this.state.colorlessCount}
              multicolorCount={this.state.multicolorCount}
              onColorCountChange={this.handleColorCountChange}
              onColorlessCountChange={this.handleColorlessCountChange}
              onMulticolorCountChange={this.handleMulticolorCountChange}
              onSubmit={this.handleSubmit}
            />
          </main>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <main className="container">
            <Input
              colorCount={this.state.colorCount}
              colorlessCount={this.state.colorlessCount}
              multicolorCount={this.state.multicolorCount}
              onColorCountChange={this.handleColorCountChange}
              onColorlessCountChange={this.handleColorlessCountChange}
              onMulticolorCountChange={this.handleMulticolorCountChange}
              onSubmit={this.handleSubmit}
            />
            <div>
              <Results
                results={this.state.results}
                simulationNumber={this.state.simulationNumber}
              />
            </div>
          </main>
        </React.Fragment>
      )
    }
  }
}

export default CubePacks
