export default () => {
    const container = document.createElement("div");
    container.classList.add("main");

    container.innerHTML = `
        <h1 class="article-title">Windows 11 ganha widget do Microsoft 365 em nova versão beta</h1>
        <h6 class="ref">27/08/2021 às 17:30, em <a href="https://www.tecmundo.com.br/software/223958-windows-11-ganha-widget-microsoft-365-nova-versao-beta.htm" target="_blank" rel="noopener noreferrer">Tecmundo</a></h6>
        <p>Um novo beta do Windows 11 foi lançado pela Microsoft nesta sexta-feira (27) trazendo melhorias interessantes para quem participa do programa Insider, além das tradicionais correções de bugs. Ainda não é a versão com maior quantidade de bugs mencionada recentemente pela empresa, em e-mail enviado aos testadores.</p>
        <p>O widget para Microsoft 365 é uma das principais novidades presentes no Windows 11 Insider Preview Build 22000.168. Por meio dele, será possível conferir os arquivos abertos com maior frequência, gravações de reuniões, notícias e outras informações relevantes.</p>
        <p>Segundo a gigante de Redmond, a lista personalizada ajudará usuários a “manter o controle do seu trabalho e a encontrar as informações de que precisam com facilidade". Disponível para clientes corporativos conectados a uma conta Azure Active Directory (AAD), ele pode ser ativado na opção “Adicionar Widgets”.</p>
        <p>Vale destacar também a chegada, ao Microsoft Teams, do suporte a vários idiomas. Com a atualização, os testadores da próxima geração do Windows podem usar o app de bate-papo e vídeo em diversos idiomas, entre os quais o português do Brasil.</p>
        <h2 class="article-subtitle">Microsoft Store e correções</h2>
        <p>Os inscritos no Canal Dev terão acesso antecipado a algumas melhorias na loja oficial de apps do sistema, como a nova interface da biblioteca, com navegação mais simples e inicialização otimizada. Pequenas alterações no visual da página inicial também foram adicionadas.</p>
        <p>Já em relação às correções, foram consertados os erros de travamento e tela preta em chamadas de vídeo no Microsoft Teams e o bug em dispositivos habilitados com caneta, que dificultava a execução de apps a partir dos resultados de pesquisa. Falhas no widget Família e no menu de configurações também deixaram de existir.</p>
        <ul>
            <li class="ref" style="margin-left: 2%;"><a href="https://www.tecmundo.com.br/software/223945-microsoft-nao-limitara-instalacao-windows-11-pcs-antigos.htm" target="_blank" rel="noopener noreferrer">Microsoft não limitará instalação do Windows 11 em PCs antigos</a></li>
        </ul>
        <p>O download do novo beta do Windows 11 já está disponível nos canais Beta e Dev. A lista completa de melhorias, mudanças e correções pode ser conferida no site da Microsoft.</p>
        <h5 class="ref">Escrito por: André Luiz Dias Gonçalves, via <a href="http://nexperts.co/" target="_blank" rel="noopener noreferrer">nexperts</a></h5>
    `

    return container;
}