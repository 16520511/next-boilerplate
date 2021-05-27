import { ACCOUNT_LOGIN, ACCOUNT_LOGOUT } from "../redux.config";

export function accountLogin(payload, callback) {
  return {
    type: ACCOUNT_LOGIN,
    payload,
    callback
  }
}

export function accountLogout(callback) {
  return {
    type: ACCOUNT_LOGOUT,
    payload: {},
    callback
  }
}