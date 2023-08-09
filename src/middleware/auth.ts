export default function auth(to:any) {
  if (to.name == "login") {
    return true
  }
  if (localStorage.activeUser) {
    return true;
  }
  return false;
}