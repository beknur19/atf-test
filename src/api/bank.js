import accounts from './accounts.json'

const TIMEOUT = 100

export default {
  getTotalBalance: (cb) => setTimeout(() => cb({total_balance: 15999}), TIMEOUT),
  getAccountList: (cb) => setTimeout(() => cb(accounts), TIMEOUT)
}
