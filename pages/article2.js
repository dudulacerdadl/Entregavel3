export default () => {
    const container = document.createElement("div");
    container.classList.add("main");

    container.innerHTML = `
        <h1 class="article-title">Xiaomi lança MIUI 12 Beta baseada no Android 12 para o Mi 11</h1>
        <h6 class="ref">28/08/2021 às 09:00, em <a href="https://www.tecmundo.com.br/software/223933-xiaomi-lanca-miui-12-beta-baseada-android-12-mi-11.htm" target="_blank" rel="noopener noreferrer">Tecmundo</a></h6>
        <p>O Android 12 está chegando, e fabricantes de smartphones, agora, se dedicam a adaptá-lo para seus aparelhos. A Xiaomi lançou sua interface baseada na versão mais recente do próximo sistema operacional do Google, a MIUI 12 Beta, e a liberou para testes fechados com o Mi 11.</p>
        <p>Ainda que diversas empresas tenham anunciado soluções construídas sobre o Android 12 Beta, muitas delas não implementaram ajustes de atualizações posteriores — como os da Beta 4.1, que trazem correções relacionadas a bugs de apps e API estável. A Xiaomi é uma das primeiras a distribuir algo mais concreto.</p>
        <p>Há algumas desvantagens na novidade, entretanto. Por estar limitada a clientes do país asiático, a MIUI 12 Beta baseada no Android 12 não conta com quaisquer apps da gigante das buscas, e as opções de idiomas se restringem ao inglês e ao mandarim. No mais, comparada à solução desenvolvida a partir do Android 11, possui funcionalidades incompletas ou mesmo ausentes.</p>
        <h2 class="article-subtitle">Dúvidas e precauções</h2>
        <p>Espera-se que, com o tempo, mais modelos da marca entrem no programa, como o Mi 11 Ultra, o Mi 11i e o Mi 11X Pro – todos já contemplados com uma interface baseada no primeiro Android 12 Beta. De todo modo, a companhia não se pronunciou a respeito da expansão.</p>
        <p>Por enquanto, para instalar a nova MIUI 12 Beta de maneira simplificada, é preciso, além de baixar o arquivo ZIP, ter acesso uma conta Mi para desenvolvedores — uma restrição que, em tese, pode ser contornada com processos manuais. Ainda assim, o backup de dados é mais que recomendado para ambos os casos.</p>
        <h5 class="ref">Escrito por: Reinaldo Zaruvni, via <a href="http://nexperts.co/" target="_blank" rel="noopener noreferrer">nexperts</a></h5>
    `

    return container;
}