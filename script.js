function toggleMode() {
  //botão switch
  const html = document.documentElement

  //  if(html.classList.contains('light')) {
  //    html.classList.remove('light')
  //   } else {
  //    html.classList.add('light')
  //   } 

  html.classList.toggle('light')  

// Foto de perfil

// pegar a tag img
  const img = document.querySelector("#profile img")

// substituir a imagem
  if (html.classList.contains('light')) {
   //se tiver light mode, adicionar a imagem preto e branco
   img.setAttribute("src", "./assets/avatar2.png")
  } else {
    // se river sem light mode, manter imagem colorida
  img.setAttribute("src", "./assets/avatar.png")
  }

  // substituir a tag da imagem
  if (html.classList.contains('light')) {
   //se tiver light mode, adicionar a imagem preto e branco
   img.setAttribute("alt", "Foto de Francine Sorrindo em preto e branco")
  } else {
    // se river sem light mode, manter imagem colorida
  img.setAttribute("alt", "Foto de Francine Sorrindo")
  }
}