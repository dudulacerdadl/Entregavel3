export default () => {
    const container = document.createElement("div");
    container.classList.add("main");

    container.innerHTML = `
        <h1>Sobre</h1>
        <p>Este é o Agora News, um site aleatório com algumas notícias relacionadas ao mundo da programação.</p>
        <p>Tudo isso não passa de um treinamento para elaborar um layout bonitinho para páginas web, então por isso não teremos notícias mais elaboradas</p>
        <p>Esse texto mesmo, é apenas um texto para ocupar espaço em uma página sobre, e a páginas ficar como deveria</p>
        <p>Temos também uma página de contato, para você entrar em contato conosco.</p>
    `

    return container;
}