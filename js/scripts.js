function clicado() {

    let texto = document.querySelector('p.txt');

    texto.classList.add('destaque');

}

function voltarClicado() {

    let texto = document.querySelector('p.txt');

    texto.classList.remove('destaque');

}