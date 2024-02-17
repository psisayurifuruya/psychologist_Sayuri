function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains('light')) {
  //html.classList.remove('light')
  //} else {
  // html.classList.add('light')
  //}
  //  OU
  html.classList.toggle("dark")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("dark")) {
    // se tiver dark mode, adicionar a imagem moon
    img.setAttribute("src", "./assets/say.png")
  } else {
    // se tiver sem dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/say.png")
  }
}
