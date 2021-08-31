export default () => {
    const container = document.createElement("div");
    container.classList.add("main");

    container.innerHTML = `
        <h1>Bem-Vindo!</h1>
        <p>O que gostaria de ver hoje? O mundo anda bem agitado! Confira as últimas notícias no Agora News</p> 
    `

    return container;
}