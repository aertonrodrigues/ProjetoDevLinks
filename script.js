function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');
    // if (html.classList.contains('light')) {
    //     html.classList.remove ('light');
    // } else {
    //     html.classList.add('light')
    // }

    
    //pegar a tag img
    const img = document.querySelector("#profile img")
    
    //substituir a imagem
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos escuro, camisa preta e jaqueta, barba e fundo azul.')
    } else {
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.')
    }

    
    //se tiver light mode, adicionar a imagem light
    //se tiver sem light mode, manter imagem normal
}