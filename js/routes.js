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
    },
    article1: {
        path: "/windows-11-microsoft-exibe-compatibilidade-windows-update",
        template: `
            <h1 class="article-title">Windows 11: Microsoft exibe compatibilidade no Windows Update</h1>
            <h6 class="ref">30/08/2021 às 09:30, em <a href="https://www.tecmundo.com.br/software/223991-windows-11-microsoft-exibe-compatibilidade-windows-update.htm" target="_blank" rel="noopener noreferrer">Tecmundo</a></h6>
            <p>A Microsoft começou a adicionar uma nova e importante informação na tela de atualizações de quem está participando das versões prévias do Windows 11 e da futura atualização do Windows 10.</p>
            <p>A partir da versão Insider Preview 10.0.222000.160, uma mensagem no canto direito da tela confirma se a máquina atinge os requisitos mínimos exigidos para o Windows 11 e poderá rodar a versão estável do sistema normalmente ou terá que manter o Windows 10 como plataforma.</p>
            <p>Junto da confirmação, há links relevantes que complementam a checagem e trazem as especificações técnicas completas necessárias. Segundo o site Microsoft Power User, o aviso também é exibido para usuários do Windows 10 21H2, versão prévia de uma futura versão do sistema atual da companhia.</p>
            <p>As exigentes configurações de impostas pela Microsoft são, até agora, o ponto mais polêmico em relação à atualização para a nova versão. Depois do anúncio oficial, a empresa até confirmou que não limitará a instalação em PCs antigos ou com processadores mais datados, mas vai dificultar o processo e pode não ser capaz de impedir algumas incompatibilidades.</p>
            <p>A versão estável do Windows 11 deve ser lançada até o final de 2021, possivelmente em outubro.</p>
            <h5 class="ref">Escrito por: Nilton Kleina, via <a href="http://nexperts.co/" target="_blank" rel="noopener noreferrer">nexperts</a></h5>
        `,
    },
    article2: {
        path: "/xiaomi-lanca-miui-12-beta-baseada-android-12-mi-11",
        template: `
            <h1 class="article-title">Xiaomi lança MIUI 12 Beta baseada no Android 12 para o Mi 11</h1>
            <h6 class="ref">28/08/2021 às 09:00, em <a href="https://www.tecmundo.com.br/software/223933-xiaomi-lanca-miui-12-beta-baseada-android-12-mi-11.htm" target="_blank" rel="noopener noreferrer">Tecmundo</a></h6>
            <p>O Android 12 está chegando, e fabricantes de smartphones, agora, se dedicam a adaptá-lo para seus aparelhos. A Xiaomi lançou sua interface baseada na versão mais recente do próximo sistema operacional do Google, a MIUI 12 Beta, e a liberou para testes fechados com o Mi 11.</p>
            <p>Ainda que diversas empresas tenham anunciado soluções construídas sobre o Android 12 Beta, muitas delas não implementaram ajustes de atualizações posteriores — como os da Beta 4.1, que trazem correções relacionadas a bugs de apps e API estável. A Xiaomi é uma das primeiras a distribuir algo mais concreto.</p>
            <p>Há algumas desvantagens na novidade, entretanto. Por estar limitada a clientes do país asiático, a MIUI 12 Beta baseada no Android 12 não conta com quaisquer apps da gigante das buscas, e as opções de idiomas se restringem ao inglês e ao mandarim. No mais, comparada à solução desenvolvida a partir do Android 11, possui funcionalidades incompletas ou mesmo ausentes.</p>
            <h2 class="article-subtitle">Dúvidas e precauções</h2>
            <p>Espera-se que, com o tempo, mais modelos da marca entrem no programa, como o Mi 11 Ultra, o Mi 11i e o Mi 11X Pro – todos já contemplados com uma interface baseada no primeiro Android 12 Beta. De todo modo, a companhia não se pronunciou a respeito da expansão.</p>
            <p>Por enquanto, para instalar a nova MIUI 12 Beta de maneira simplificada, é preciso, além de baixar o arquivo ZIP, ter acesso uma conta Mi para desenvolvedores — uma restrição que, em tese, pode ser contornada com processos manuais. Ainda assim, o backup de dados é mais que recomendado para ambos os casos.</p>
            <h5 class="ref">Escrito por: Reinaldo Zaruvni, via <a href="http://nexperts.co/" target="_blank" rel="noopener noreferrer">nexperts</a></h5>
        `,
    },
    article3: {
        path: "/youtube-music-chega-wear-novos-smartwatches-samsung",
        template: `
            <h1 class="article-title">YouTube Music chega ao Wear OS em novos smartwatches da Samsung</h1>
            <h6 class="ref">27/08/2021 às 19:30, em <a href="https://www.tecmundo.com.br/software/223889-youtube-music-chega-wear-novos-smartwatches-samsung.htm" target="_blank" rel="noopener noreferrer">Tecmundo</a></h6>
            <p>O serviço de streaming YouTube Music, da Google, ganhou uma aguardada versão para o sistema operacional de dispositivos vestíveis da empresa, o Wear OS. A espera do público já era longa — mais especificamente desde outubro de 2020, quando o Google Play Music foi descontinuado na plataforma e não ganhou um substituto direto.</p>
            <p>Entretanto, o lançamento ainda está longe do esperado: somente dois novos smartwatches da Samsung, o Galaxy Watch 4 e o Galaxy Watch 4 Classic, terão acesso ao aplicativo. Ambos foram anunciados no início de agosto deste ano e estarão no mercado a partir desta sexta-feira (27). Por enquanto, não há uma data prevista para que outros aparelhos recebem a novidade.</p>
            <p>Assim como em outros aparelhos, o YouTube Music para Wear OS traz benefícios para quem é assinante Premium da plataforma. Eles incluem a capacidade de baixar músicas e até escutar usando apenas os fones Bluetooth, sem precisar de conexão com a internet. Entretanto, ao menos neste início, o app só faz esse processo quando o dispositivo está acoplado no carregador.</p>
            <p>A linha Galaxy Watch 4 foi revelada pela Samsung no mesmo dia da apresentação dos novos celulares dobráveis da marca. Os produtos ainda não têm preço oficial no Brasil, mas chegarão ao país em 15 de setembro.</p>
            <h5 class="ref">Escrito por: Nilton Kleina, via <a href="http://nexperts.co/" target="_blank" rel="noopener noreferrer">nexperts</a></h5>
        `,
    },
    article4: {
        path: "/windows-11-ganha-widget-microsoft-365-nova-versao-beta",
        template: `
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
        `,
    },
    article5: {
        path: "/laravel-conheca-o-framework-php-utilizado",
        template: `
            <h1 class="article-title">O que é Laravel? Conheça o framework de PHP mais utilizado</h1>
            <h6 class="ref">26/08/2021 às 19:30, em <a href="https://www.tecmundo.com.br/software/223718-laravel-conheca-o-framework-php-utilizado.htm" target="_blank" rel="noopener noreferrer">Tecmundo</a></h6>
            <p>Produzir um site já deixou de ser uma coisa inovadora e única. Pessoas, empresas, eventos e organizações possuem uma presença online, através de uma página na internet.  Mas, em meio a tantos sites já criados e processos utilizados, é normal para um desenvolvedor web aproveitar funções que já foram utilizadas, ao invés de criar um site do zero e é aqui que entram os frameworks.</p>
            <p>Os frameworks são a base para a criação de sites, unindo ferramentas, funções, recursos e outros detalhes para encurtar o trabalho do profissional na hora de criar uma página online em determinada linguagem de código.</p>
            <p>Dentre as opções, está o PHP, uma das linguagens mais dinâmicas utilizadas por programadores e desenvolvedores para construir sites ou sistemas integrados e inteligentes. Mas a dúvida que fica para quem está começando a desenvolver sites e está a procura de um framework para otimizar seu tempo é: qual o melhor framework de PHP?</p>
            <p>No mercado, existem diversas opções, como: Symfony, CodeIgniter, Zend, Phalcon, CakePHP e Yii cada uma com suas vantagens e desvantagens. Mas o framework mais popular é, sem dúvidas, o Laravel.</p>
            <p>Para te ajudar, o TecMundo preparou um pequeno guia para iniciantes explicando os detalhes, recursos e vantagens sobre o framework PHP mais utilizado para produção de sites incríveis. Uma ótima forma de dar o primeiro passo no universo do PHP e da criação de sites. Acompanhe com a gente:</p>
            <h2 class="article-subtitle">O que é Laravel?</h2>
            <p>Gratuito, de código aberto, com suporte a recursos avançados e facilidade na construção do código, que é simples e legível: essas são as principais vantagens do Laravel, o que torna ele o framework preferido de vários desenvolvedores PHP.</p>
            <p>Sua primeira versão foi lançada em 2011 como uma alternativa ao Codelgniter, um dos frameworks mais populares da época. Tyler B. Otwell foi o desenvolvedor responsável e, desde então, manteve o conjunto de funções disponíveis em código aberto, recebendo atualizações constantes de melhoria pelas mãos do criador e da comunidade até os dias de hoje.</p>
            <h2 class="article-subtitle">Recursos e funcionalidades principais</h2>
            <p>Com o nome de “Framework PHP para os artesãos da web”, o Laravel tem diversas funcionalidades e recursos interessantes, tanto para iniciantes como profissionais mais antigos do desenvolvimento.</p>
            <p>Algumas funções muito úteis que podemos encontrar no framework PHP mais utilizado são:</p>
            <ul style="margin-left: 2%;">
                <li>A utilização de um sistema modular para gerenciamento de dependências;</li>
                <li>Diferentes formas de conexão;</li>
                <li>Acesso a banco de dados relacionais;</li>
                <li>Motor próprio de templates para criação de interfaces;</li>
                <li>Programas e serviços criados para facilitar a publicação e manutenção de sistemas criados;</li>
                <li>Implementação nativa do Composer;</li>
                <li>Facilita a escalabilidade do sistema;</li>
                <li>Workflow e completo;</li>
                <li>Documentação útil e organizada;</li>
                <li>Por ser mais popular, é mais fácil de encontrar soluções na internet;</li>
                <li>Outras funcionalidades como Blade, Elixir, Homestead, Migrations e Artisan.</li>
            </ul>
            <p>Outro ponto funcional é que o framework é baseado na arquitetura MVC, ou Model-View-Controller, que é um padrão de arquitetura de software para reutilização de código. O nome se dá por conta da divisão de um sistema em 3 camadas: Modelo, Visão e Controle. Enquanto a primeira está relacionada ao banco de dados, a segunda vincula-se dos dados e das páginas e a última é responsável pela conexão e transmissão de informações entre Modelo e Visão.</p>
            <p>Porém, nem tudo são flores. Alguns desenvolvedores mencionam algumas desvantagens de utilizar o framework, como complexidade da estrutura de trabalho, que pode dificultar a instalação; há alguns problemas de produtividade ao roda-lo em hospedagens comuns; e a alta quantidade de recursos que acaba refletindo em um número menor de conteúdo para aprender, mesmo que haja muita ajuda na internet acerca de soluções.</p>
            <p>Se você quer aprender a programar, pode recorrer a construção de sites e sistemas do zero, mas usar frameworks para ganhar tempo pode ser muito útil. O Laravel é só uma das opções, dentre elas a mais utilizada, mas não significa que seja a melhor para você. O ideal é pesquisar bastante e testar todos os ecossistemas antes de decidir as funcionalidades que você deseja aplicar na linguagem de programação PHP.</p>
            <p>Agora que você conhece mais sobre framework, Laravel e PHP, é hora de colocar a mão na massa. Boa sorte!</p>
            <h5 class="ref">Escrito por: Cezar Vinicius R. Joukovski, via <a href="http://nexperts.co/" target="_blank" rel="noopener noreferrer">nexperts</a></h5>
        `,
    },
}