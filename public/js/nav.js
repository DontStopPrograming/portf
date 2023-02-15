let menuOpen = false

let menu = document.getElementById("check")
let links = document.getElementsByTagName("a")

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    menuOpen = false
    menu.checked = false
  })
}

menu.addEventListener("click", function() {
  menuOpen = !menuOpen
})