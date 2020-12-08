// import Cookies from 'js-cookie'
// localStorage.setItem("key", "value");
// var lastname = localStorage.getItem("key");
// localStorage.removeItem("key");
const TokenKey = 'Authorization'
export function getToken () {
  return localStorage.getItem(TokenKey)
}
export function setToken (token) {
  return localStorage.setItem(TokenKey, token)
}
export function removeToken () {
  return localStorage.removeItem(TokenKey)
}
// export function getToken () {
//   return Cookies.get(TokenKey)
// }
// export function setToken (token) {
//   return Cookies.set(TokenKey, token)
// }
// export function removeToken () {
//   return Cookies.remove(TokenKey)
// }
