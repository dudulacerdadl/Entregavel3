export default () => {
    const container = document.createElement("div");
    container.classList.add("main");

    container.innerHTML = `
        <h1 class="article-title">YouTube Music chega ao Wear OS em novos smartwatches da Samsung</h1>
        <h6 class="ref">27/08/2021 às 19:30, em <a href="https://www.tecmundo.com.br/software/223889-youtube-music-chega-wear-novos-smartwatches-samsung.htm" target="_blank" rel="noopener noreferrer">Tecmundo</a></h6>
        <p>O serviço de streaming YouTube Music, da Google, ganhou uma aguardada versão para o sistema operacional de dispositivos vestíveis da empresa, o Wear OS. A espera do público já era longa — mais especificamente desde outubro de 2020, quando o Google Play Music foi descontinuado na plataforma e não ganhou um substituto direto.</p>
        <p>Entretanto, o lançamento ainda está longe do esperado: somente dois novos smartwatches da Samsung, o Galaxy Watch 4 e o Galaxy Watch 4 Classic, terão acesso ao aplicativo. Ambos foram anunciados no início de agosto deste ano e estarão no mercado a partir desta sexta-feira (27). Por enquanto, não há uma data prevista para que outros aparelhos recebem a novidade.</p>
        <p>Assim como em outros aparelhos, o YouTube Music para Wear OS traz benefícios para quem é assinante Premium da plataforma. Eles incluem a capacidade de baixar músicas e até escutar usando apenas os fones Bluetooth, sem precisar de conexão com a internet. Entretanto, ao menos neste início, o app só faz esse processo quando o dispositivo está acoplado no carregador.</p>
        <p>A linha Galaxy Watch 4 foi revelada pela Samsung no mesmo dia da apresentação dos novos celulares dobráveis da marca. Os produtos ainda não têm preço oficial no Brasil, mas chegarão ao país em 15 de setembro.</p>
        <h5 class="ref">Escrito por: Nilton Kleina, via <a href="http://nexperts.co/" target="_blank" rel="noopener noreferrer">nexperts</a></h5>
    `

    return container;
}