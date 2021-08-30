const PATHS = {
    home: {
        path: "/",
        template: `
            <h1>Bem-Vindo!</h1>
            <p>O que gostaria de ver hoje? O mundo anda bem agitado! Confira as últimas notícias no Agora News</p>
        `,
    },
    sobre: {
        path: "/Sobre",
        template: `
            <h1>Sobre</h1>
            <p>Este é o Agora News, um site aleatório com algumas notícias relacionadas ao mundo da programação.</p>
            <p>Tudo isso não passa de um treinamento para elaborar um layout bonitinho para páginas web, então por isso não teremos notícias mais elaboradas</p>
            <p>Esse texto mesmo, é apenas um texto para ocupar espaço em uma página sobre, e a páginas ficar como deveria</p>
            <p>Temos também uma página de contato, para você entrar em contato conosco.</p>
        `,
    },
    contato: {
        path: "/Contato",
        template: `
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
        `,
    }
}