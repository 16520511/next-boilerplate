import { fork, all } from 'redux-saga/effects'
import AccountSaga from './account.saga'

function* rootSagas() {
  yield all([
    fork(AccountSaga)
  ])
}
export default rootSagas
