// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, balanceDeduction} = props
  const {value} = denominationsList

  const onclickValueButton = () => {
    balanceDeduction(value)
  }

  return (
    <li className="card-list-container">
      <div>
        <button className="btn" type="button" onClick={onclickValueButton}>
          {value}
        </button>
      </div>
    </li>
  )
}

export default DenominationItem
