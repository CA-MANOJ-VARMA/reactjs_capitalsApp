import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  selectedCapital = event => {
    const selectedValue = event.target.value
    console.log(selectedValue)
    const selectedProperty = countryAndCapitalsList.filter(
      e => e.id === selectedValue,
    )
    // console.log(selectedProperty)
    this.setState({country: selectedProperty[0].country})
  }

  render() {
    const {country} = this.state
    return (
      <div className="css-bg-container">
        <div className="css-grid-container">
          <h1>Countries And Capitals</h1>
          <div className="css-options-container">
            <select
              onChange={this.selectedCapital}
              className="css-select-container"
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
