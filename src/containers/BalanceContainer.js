import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { showAlert } from '../actions'
import TotalBalance from '../components/TotalBalance'
import AccountList from '../components/AccountsList'
import AccountItem from '../components/AccountItem' 

const BalanceContainer = ({ accounts, total_balance, showAlert }) => (
  <div className="card h-100">
    <div className="card-header d-flex align-items-center px-5 py-3">
      <div className="header-icon header-icon__card d-flex justify-content-center align-items-center flex-shrink-1"></div>
      <p className="header-text flex-grow-1 m-0 px-3">Счета</p>
      <button className="btn btn-transparent d-flex flex-shrink-1 px-0">
        Все счета
        <span className="right-arrow"></span>
      </button>
    </div>
    <div className="balance-body card-body d-flex flex-column flex-grow-0 p-0">
      <TotalBalance total_balance={ total_balance } showAlert={ showAlert } />
      <AccountList>
        { accounts ? accounts.map(item => 
          <AccountItem showAlert={ showAlert } account={ item } key={ item.account_id } />
        ) : [] }
      </AccountList>
    </div>
  </div>
)

BalanceContainer.protoTypes = {
  accounts: PropTypes.arrayOf(PropTypes.shape({
    balance: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    account_id: PropTypes.string.isRequired
  })).isRequired,
  total_balance: PropTypes.number,
  showAlert: PropTypes.func
}

const mapStateToProps = ({ total_balance, accounts }) => { 
  return { total_balance, accounts }
}

export default connect(
  mapStateToProps,
  { showAlert }
)(BalanceContainer)
