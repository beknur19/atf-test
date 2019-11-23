import React from 'react'
import PropTypes from 'prop-types'

const AccountList = ({ children }) => {
  console.log(children)

  return (
    <ul className="account-list overflow-auto list-group list-group-flush">
      { children }
    </ul>
  )
}

AccountList.propTypes = {
  choldren: PropTypes.node,
}

export default AccountList
