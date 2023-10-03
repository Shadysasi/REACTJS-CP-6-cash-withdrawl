// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {total: 2000}

  balanceDeduction = value => {
    this.setState(prevVal => ({total: prevVal.total - value}))
  }

  render() {
    const name = 'Sarah Williams'
    const slice = name.slice(0, 1)
    const {denominationsList} = this.props
    const {total} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-card">
            <div className="profile-initial">
              <p>{slice}</p>
            </div>
            <h1 className="profile-name">{name}</h1>
          </div>
          <div className="balance-card">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="total-card">{total}</p>
              <p>in Rupees</p>
            </div>
          </div>
          <div className="withdraw-card">
            <p className="withdraw-text">Withdraw</p>
            <p className="description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="card-button">
              {denominationsList.map(eachValue => (
                <DenominationItem
                  denominationsList={eachValue}
                  key={eachValue.id}
                  balanceDeduction={this.balanceDeduction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
