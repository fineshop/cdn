let curMode = localStorage.getItem("MODE")
if (curMode === null) {
  //* Default Mode
  localStorage.setItem("MODE", "LIGHT")
  curMode = localStorage.getItem("MODE")
}
document.documentElement.classList.add(curMode === "DARK" ? "dark" : "light")
let toogleMode = () => {
  let docElem = document.documentElement
  let curMode = localStorage.getItem("MODE")
  docElem.classList.remove("dark", "light")
  docElem.classList.add(curMode === "DARK" ? "light" : "dark")
  localStorage.setItem("MODE", curMode === "DARK" ? "LIGHT" : "DARK")
}