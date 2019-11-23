import {
  RECEIVE_TOTAL_BALANCE,
  RECEIVE_ACCOUNTS, 
  SHOW_ALERT, 
} from '../constants/ActionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      alert('Hello world!')
      
      return state
    case RECEIVE_ACCOUNTS:
      return {
        ...state,
        accounts: action.accounts
      }
    case RECEIVE_TOTAL_BALANCE:
      return {
        ...state,
        total_balance: action.total_balance
      }
    default:
      return state
  }
}