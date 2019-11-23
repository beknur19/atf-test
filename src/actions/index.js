import bank from '../api/bank'
import * as types from '../constants/ActionTypes'


const receiveAccounts = accounts => ({
  type: types.RECEIVE_ACCOUNTS,
  accounts
})

const receiveTotalBalance = total_balance => ({
  type: types.RECEIVE_TOTAL_BALANCE,
  total_balance
})

export const getAccountList = () => dispatch => {
  bank.getAccountList(accounts => {
    dispatch(receiveAccounts(accounts))
  })
}

export const getTotalBalance = () => dispatch => {
  bank.getTotalBalance(({ total_balance }) => {
    dispatch(receiveTotalBalance(total_balance))
  })
}

export const showAlert = () => dispatch => {
  dispatch({type: types.SHOW_ALERT})
}