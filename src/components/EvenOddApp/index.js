/* eslint-disable no-unused-vars */
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  getRandomElement = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomElement()

    this.setState(preState => ({
      number: preState.number + randomNumber,
    }))
  }

  render() {
    const {number} = this.state
    const numberLetterEvenOrOdd = number % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container-even-Odd">
        <div className="bg-container">
          <h1 className="heading">Count {number}</h1>
          <p className="description-type">Count is {numberLetterEvenOrOdd}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description-random">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
