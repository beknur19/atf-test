import React from 'react'
import PropTypes from 'prop-types'
import money_icon from '../resources/img/icon-money.svg'
import numberPrettyPrint from '../helpers/numberPrettyPrint'

const TotalBalance  = ({ total_balance, showAlert }) => {
  return (
    <div className="total-balance d-flex align-items-center py-3 px-5">
      <div className="balance flex-grow-1">
        <p className="balance-label py-2 m-0">Доступная сумма на счетах в эквиваленте: </p>
        <div className="balance-info d-flex align-items-center py-2">
          <img className="balance-icon" src={ money_icon } alt="money icon"/>
          <p className="balance-text pl-3 pr-2 m-0">{ numberPrettyPrint(total_balance, 2) }</p>
          <p className="balance-postfix m-0">KZT</p>
        </div>
      </div>
      <button className="btn btn-lg btn-atf btn-atf-plus" onClick={ showAlert }>СОЗДАТЬ ПЛАТЕЖ</button>
    </div>
  )
}

TotalBalance.propTypes = {
  total_balance: PropTypes.number,
  showAlert: PropTypes.func
}

export default TotalBalance
