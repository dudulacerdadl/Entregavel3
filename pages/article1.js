export default () => {
    const container = document.createElement("div");
    container.classList.add("main");

    container.innerHTML = `
        <h1 class="article-title">Windows 11: Microsoft exibe compatibilidade no Windows Update</h1>
        <h6 class="ref">30/08/2021 às 09:30, em <a href="https://www.tecmundo.com.br/software/223991-windows-11-microsoft-exibe-compatibilidade-windows-update.htm" target="_blank" rel="noopener noreferrer">Tecmundo</a></h6>
        <p>A Microsoft começou a adicionar uma nova e importante informação na tela de atualizações de quem está participando das versões prévias do Windows 11 e da futura atualização do Windows 10.</p>
        <p>A partir da versão Insider Preview 10.0.222000.160, uma mensagem no canto direito da tela confirma se a máquina atinge os requisitos mínimos exigidos para o Windows 11 e poderá rodar a versão estável do sistema normalmente ou terá que manter o Windows 10 como plataforma.</p>
        <p>Junto da confirmação, há links relevantes que complementam a checagem e trazem as especificações técnicas completas necessárias. Segundo o site Microsoft Power User, o aviso também é exibido para usuários do Windows 10 21H2, versão prévia de uma futura versão do sistema atual da companhia.</p>
        <p>As exigentes configurações de impostas pela Microsoft são, até agora, o ponto mais polêmico em relação à atualização para a nova versão. Depois do anúncio oficial, a empresa até confirmou que não limitará a instalação em PCs antigos ou com processadores mais datados, mas vai dificultar o processo e pode não ser capaz de impedir algumas incompatibilidades.</p>
        <p>A versão estável do Windows 11 deve ser lançada até o final de 2021, possivelmente em outubro.</p>
        <h5 class="ref">Escrito por: Nilton Kleina, via <a href="http://nexperts.co/" target="_blank" rel="noopener noreferrer">nexperts</a></h5>
    `

    return container;
}