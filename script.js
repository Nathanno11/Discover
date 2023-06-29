function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const image = document.querySelector("#profile img")

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } 
  
  A função acima (Toggle) funciona de forma simplificada*/

  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar.png")
  } else {
    image.setAttribute("src", "./assets/avatar-dark.png")
  }
}
