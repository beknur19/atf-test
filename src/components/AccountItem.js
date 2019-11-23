import React from 'react'
import PropTypes from 'prop-types'
import numberPrettyPrint from '../helpers/numberPrettyPrint'

const AccountItem = ({ account, showAlert }) => (
  <div onClick={ showAlert } className="account list-group-item d-flex align-items-end px-5 py-3">
    <div className="account-info flex-grow-1">
      <p className="account-label py-2 m-0">Счет</p>
      <p className="account-id py-2 m-0">{ account.account_id }</p>
    </div>
    <div className="account-balance flex-grow-1 text-right">
      <p className="account-count py-2 m-0">{ numberPrettyPrint(account.count, 2) } KZT</p>
      <p className="account-balance-text py-2 m-0">
        Плановый остаток: { numberPrettyPrint(account.balance, 2) }
      </p>
    </div>
    <div className="account-arrow align-self-stretch d-flex align-items-center flex-shrink-0 px-3">
      <div className="right-arrow"></div>
    </div>
  </div>
)

AccountItem.propTypes = {
  account: PropTypes.shape({
    balance: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    account_id: PropTypes.string.isRequired
  }).isRequired,
  showAlert: PropTypes.func.isRequired
}

export default AccountItem
