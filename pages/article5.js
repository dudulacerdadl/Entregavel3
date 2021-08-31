export default () => {
    const container = document.createElement("div");
    container.classList.add("main");

    container.innerHTML = `
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
    `

    return container;
}