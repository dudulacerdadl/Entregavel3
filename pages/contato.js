export default () => {
    const container = document.createElement("div");
    container.classList.add("main");

    container.innerHTML = `
        <h1>Contatos</h1>
        <p>Alguma ideia, sugestão ou elogio?</p>
        <p>Manda ai pra gente! Toda ajuda é bem-vinda</p>
        <form class="form" action="#" method="GET">
            <fieldset class="form-container">
                <label class="form-label">
                    Nome Completo:
                    <input type="text" id="name" required placeholder="digite aqui">
                </label>
                <br>
                <label class="form-label">
                    Telefone:
                    <input type="tel" id="tel" required placeholder="digite aqui">
                </label>
                <br>
                <label class="form-label">
                    E-mail:
                    <input type="email" id="email" required placeholder="digite aqui">
                </label>
                <br>
                <label class="form-label" for="msg">
                    Digite sua mensagem:
                </label>
                <textarea name="msg" id="msg" rows="10"></textarea>
                <br>
                <div class="btn-div">
                    <input type="submit" value="Enviar" class="btn">
                </div>
            </fieldset>
        </form>
    `

    return container;
}