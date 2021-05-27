import { put, takeLatest, call } from 'redux-saga/effects'
import { RequestPost } from '../client/services/Request';
import { ACCOUNT_LOGIN, ACCOUNT_LOGOUT } from '../redux/redux.config'

function* doActionLogin(action) {
  try {
    const res = yield call(RequestPost, '/api/Account/Login', action.payload);
    if (action?.callback)
      action.callback(res.data);
  } catch (error) {
    // yield put({ type: `${action?.type}_FAIL` })
  }
}

function* doActionLogout(action) {
  try {
    yield call(RequestPost, '/api/Account/Logout');
    if (action?.callback)
      action.callback();
  } catch (error) {
    // yield put({ type: `${action?.type}_FAIL` })
  }
}

export default function* watchAction() {
  yield takeLatest(ACCOUNT_LOGIN, doActionLogin)
  yield takeLatest(ACCOUNT_LOGOUT, doActionLogout)
}
