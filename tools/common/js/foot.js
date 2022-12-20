let dropItems = document.querySelectorAll(".menu-links >li.dropdown")
dropItems.forEach(item => {
  let button = item.querySelector("button")
  button.innerHTML += "<span class='indicator'><i data-icon='expand_more'></i><i data-icon='expand_less'></i></span>"
  button.addEventListener("click", (event) => {
    dropItems.forEach(el => { el !== item && el.classList.remove("active") })
    item.classList.toggle("active")
  })
})