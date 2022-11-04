import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onChangeLettersCount = event => {
    const newLetters = event.target.value
    this.setState({inputText: newLetters})
  }

  render() {
    const {inputText} = this.state
    const count = inputText.length
    return (
      <div className="bg-cont">
        <div className="bg-text-cont">
          <div className="text-cont">
            <h1 className="head">Calculate the Letters you Entered</h1>
            <label className="label-text" htmlFor="userInput">
              Enter the phrase
            </label>
            <input
              className="user-input"
              type="text"
              placeholder="Enter the phrase"
              id="userInput"
              onChange={this.onChangeLettersCount}
            />

            <div>
              <p className="calculator">No.of letters: {count} </p>
            </div>
          </div>
          <div className="img-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="letters-calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
