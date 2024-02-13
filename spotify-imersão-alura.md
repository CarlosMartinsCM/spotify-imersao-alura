# <u>**Imersão HTML, CSS Javascript Alura**</u>

Projeto que conta com duas desenvolvedoras, uma que atua no Itau e outra que atua na Globo.

Neste projeto iremos desenvolver um "clone" do spotify, utilizando as tecnologias HTML, CSS e Javascript.

Inicialmente é feita uma revisão sobre o que é exatamente HTML, CSS e Javascript, e a importância destas tecnologias no desenvolvimento web.

* HTML - O esqueleto da página;

* CSS - A estilização da página, cores, animações, fontes, o corpo bonito;

* Javascript - O dinamismo da página, interação com o usuário, o cérebro da página;

## <u>Inicio</u>

Iniciamos criando uma pasta que conterá o projeto, para isso, comando a seguir no terminal na pasta Documentos;

```
mkdir spotify-imersao-alura
```

Abir a pasta no VSCode;

Criamos os arquivos;

* index.html;

* styles.css;

* script.js;

Sem pasta nenhuma, apenas os arquivos soltos mesmo.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-01-22%2020-33-29.png)

Isso é o básico para se iniciar, ao longo do projeto iremos atualizar constantemente os arquivos, coloca-los em pastas etc.

Apesar da ansiedade em criar várias pastas com todos os arquivos que serão utilizados, é recomendado ir estruturando os arquivos aos poucos.

A hora de organizar o código, de dividi-lo vem com o tempo.

Vamos sentindo, ao longo do desenvolvimento da página a necessidade de separar os css, se teremos várias imagens, um pasta somente com imagens.

Voltamos ao index.html e criamos a extrutura básica;

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

Linkamos o css a página;

```
<link rel="stylesheet" href="styles.css">
```

*Após isso vamos até o styles.css e fazemos alguns testes;*

Para isso começamos alterando a cor de fundo da página com o seletor body;

```
body {
    background-color: #000;
}
```

* E no index.html adicionamos um h1 escrito spotify;

```
<h1>Spotify</h1>
```

* Alteramos a cor da fonte para branco, do h1;

```
h1 {
    color: #fff;
}
```

*Um detalhe muito importante é não se preocupar em entregar o site completo de uma vez, mas sim codar pequenas partes, e assim ter um emaranhado no final, isso evita que nos perdamos ao longo do processo.*

Sendo assim iniciamos fazendo o side bar.

* Então criamos uma div.sidebar, que é o elemento que desejamos e o nome da classe dessa div;

```
div.sidebar
<div class="sidebar"></div>
```

*Essa classe será utilizada para estilizar o sidebar.*

* Depois adicionamos uma tag nav para colocar o menu;

*Dentro da div colocamos a nav;*

```
    <div class="sidebar">
        <nav></nav>
    </div>
```

*Utilizamos a tag nav pela semantica.*

Dentro da tag nav colocamos uma div para adicionar uma imagem, uma logo, utilizar as divs para isso é muito importante para que consigamos posicionar os elementos de uma forma mais fácil.

Essa imagem será um link, que poderá levar para outro lugar na página.

Então colocamos a tag "a" e dentro do "a" a imagem;

```
<div>
    <a href="">
        <img src="" alt="">
    </a>
</div>
```

Então, dentro da tag a temos a imagem, a tag a se trata de um link, assim fazendo com que a imagem seja um link.

Criamos a pasta assets que conterá algumas imagens e icones do projeto;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-01-22%2021-21-25.png)

No alt colocamos "logo do spotify";

*Neste ponto percebemos que a imagem está gigantesca, mais a frente iremos redimensiona-la para que fique de acordo. Sendo inclusive esta uma questão importante, optamos por colocar todos os elementos e organiza-los, redimencionar depois.*

Retiramos o h1 escrito spotify, pois não faz parte do projeto, foi apenas um teste.

Para o próximo passo temos a criação de uma pequena lista, dentro desta mesma div.

Então dentro de outra div colocamos  a ul, lista não ordenada.

Um truque legal é, na hora da criação da lista colocar a tag ul seguida do operador de multiplicação e o número de li que iremos precisar.

```
ul>li*2
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>                
                </div>
```

Dentro do primeirto li colocamos uma tag a, e dentro dessa tag dois spans.

* Um para a palavra Início e outro para a casinha.

Após isso será necessário adicionar a font awesome, que podemos utilizar para icones, fontes, estilos css enfim.

<u>Passos;</u>

* Acessar o site e clicar em start free;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-01-22%2022-15-02.png)

* Buscamos pelos icones de home;

* Precisaremos linkar onde estes css estão hospedados, como no google fonts.

* Então fazemos o import dessa cdn para conseguir usar os icones;

```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/solid.css"
    integrity="sha384-Tv5i09RULyHKMwX0E8wJUqSOaXlyu3SQxORObAI08iUwIalMmN5L6AvlPX2LMoSE" crossorigin="anonymous" />
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css"
    integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous" />
```

Então para aparecer o icone da casinha na tela usamos a classe;

```
class="fa fa-home"


<a href="">
    <span class="fa fa-home"></span>
    <span>Início</span>
</a>
```

Para o icone da lupa usamos o icone com a classe, copiamos e colamos a extrutura anterior, apenas mudamos os textos.

```
<a href="">
    <span class="fa fa-search"></span>
    <span>Buscar</span>
</a>
```

Mudamos a palavra home na classe para search, e Inicio para Buscar.

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-01-22%2022-38-53.png)

Também adicionamos a classe sidebar_navigation a tag nav;

```
<nav class="sidebar__navigation">
```

## Reset css

Aqui adicionamos o arquivo de reset css.

E como os arquivos css são sobscritos, precisamos nos atentar a ordem em que adicionamos os arquivos css, sempre o ultimo que irá ser carregado.

Então colocamos o reset css logo após o title.

Então iniciamos alguns estilos na nav bar.

* Adicionamos a cor de fundo, um cinza;

* Border-radius de 8px;

* Padding, espaçamento, 16px 0 0 16px;

```
.sidebar__navigation {
    background-color: #121212;
    border-radius: 8px;
    padding: 16px 0 0 16px;
}
```

Agora estilizamos o sidebar, que é o container que contém a sidebarnavigation;

* Primeiro ele tem um position fixed;

* top 0;

* left 0;

* botton 0;

* padding 12px;

* width 300px;

```
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 12px;
    width: 300px;
}
```

Então alteramos a logo, colocando em uma div separada, e a esta div damos a classe logo.

Então iniciamos a manipular a imagem da logo, usando a classe logo+img para manipular apenas a imagem da logo que esta dentro dessa div.

Atentamos as regras de especificidade, é uma imagem que está dentro de um elemento que tem a classe logo.

Para a img adicionamos os seguintes estilos;

* width 80px;

```
.logo img {
    width: 80px;
}
```

Estilizamos também a div logo.

* background: #121212;

* display: flex;

* border-radius: 8px;

* padding: 16px 0 0 16px;

```
.sidebar__navigation .logo {
    background: #121212;
    display: flex;
    border-radius: 8px;
    padding: 16px 0 0 16px;
}
```

Estilizando a .sidebar nav ul;

* margin-top: 20px;

* padding: 0 20px 10px 20px;

```
.sidebar nav ul{
    margin-top: 20px;
    padding: 0 20px 10px 20px;
}
```

Estilizamos os a's que estão dentro dos li's da sidebar;

* color: #b3b3b3;

* text-decoration: none;

* font-weight: 600;

* font-size: 14px;

```
.sidebar nav ul li a {
    color: #b3b3b3;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    font-family: "DM Sans", sans-serif;
}
```

E também os própios li's que estão dentro da sidebar;

* padding: 10px 0;

```
.sidebar ul li {
    padding: 10px 0;
}
```

Até aqui foi isso, deixo aqui o código completo, do html e css até agora, já com o desafio concluido.

### *HTML;*

```
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Spotify Imersão</title>
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="styles.css">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/solid.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css" />

</head>

<body>
    <div class="sidebar">
        <nav class="sidebar__navigation">
            <div class="logo">
                <a href="">
                    <img src="./assets/icons/logo-spotify.png" alt="logo do spotify">
                </a>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="">
                            <span class="fa fa-home"></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span class="fa fa-search"></span>
                            <span>Buscar</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="biblioteca">
            <nav class="biblioteca__navigation">
                <div>
                    <ul>
                        <li>
                            <a href="">
                                <span class="fa fa-book"></span>
                                <span>Sua biblioteca</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span class="fa fa-plus"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>




</body>

</html>
```

### CSS;

```
body {
    background-color: #000;
}

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 12px;
    width: 300px;
}

.sidebar__navigation {
    background-color: #121212;
    border-radius: 8px;
    padding: 16px 0 0 16px;
}

.sidebar__navigation .logo {
    background: #121212;
    display: flex;
    border-radius: 8px;
    padding: 16px 0 0 16px;
}

.sidebar__navigation .logo img {
    width: 80px;
}

.sidebar nav ul {
    margin-top: 20px;
    padding: 0 20px 10px 20px;
}

.sidebar ul li {
    padding: 10px 0;
}

.sidebar nav ul li a {
    color: #b3b3b3;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    font-family: "DM Sans", sans-serif;
}

.biblioteca {
    width: 300px;
    background-color: #121212;
    position: fixed;
    margin-top: 20px;
    border-radius: 8px;

}

.biblioteca__navigation {
    background-color: #121212;
    border-radius: 8px;
    padding: 16px 0 0 16px;
}

.biblioteca nav ul {
    display: flex;
    justify-content: space-between;
    margin-top: 0;
}
```

## Aula 2

Começamos retirando um div que foi criada sem classe dentro da ul.

Então iniciamos alterando o exemplo do desafio para o código que veremos na aula.

Então dentro da side bar criamos a extrutura toda da aba sua biblioteca.

```
        <div class="library">
            <div  class="library__content">
                <button class="library__button">
                    <span class="fa fas fa-book"></span>
                    <span>Sua biblioteca</span>
                </button>
                <span class="fa fa-plus"></span>
            </div>
        </div>
```

*Alinhamento vertical com as propriedades do display-flex. Usando o space-betwen.*

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-01-25%2020-31-00.png)

## <u>Aula 03</u>

Nesta aula nos preocupamos em organizar o CSS para que fique mais fácil a manutenção do código, para isso usamos o conceito de refatoração, ou seja, iremos fazer a organização do código.

Processos;

* Iniciamos criando uma pasta na raiz do projeto e movemos os arquivos CSS, chamada SRC.

* Movemos a pasta assets, que contém as imagens para SRC; 

* Criamos outra pasta dentro de SRC e chamamos de styles;

* Renomeamos o arquivo styles.css para sidebar-footer, pois foram esses elementos que alteramos com o css.

* Alteramos o index.html, para que o link css não fique quebrado;

* Altermos os caminhos dos elementos todos para que o site não fique quebrado;

* Os icones, como estamos importando via CDN não é necessário alterar nada;

* Criamos, dentro da pasta src/styles um arquivo chamado vars, de variaveis css;

* Então, dentro da pasta vars começamos a criar o root da aplicação, que é a raiz, e de onde iremos pegar os estilos de única vez;

* Iniciamos pelas fontes;

```
:root {
    /* FONTES */
    --font-dm-sans: "DM Sans", sans-serif;
}
```

Com essa alteração criamos uma variável que irá conter a fonte, alteramos ela no código e css e caso precisamos mudar a fonte, alteramos apenas na variável e não em todos os elementos que contém a fonte.

* Após a criação do arquivo precisamos carrega-lo no index.html;

* Colocamos logo após o reset.css, pois a página precisa carregar as variáveis primeiro antes dos outros arquivos;

* Carregamos a fonte no sidebar-footer, no body;

```
body {
    background-color: #000;
    font-family: var(--font-dm-sans);
}
```

Assim podemos excluir todas as declarações onde estão a fonte family, pois já foi carregada no body.

Desse modo já excluimos 6 linhas de código só nesse primeiro root.

Assim caso queiramos mudar a fonte do projeto, alteramos a fonte, ou qualquer propriedade apenas no root, raiz do projeto, e não no css todo.

Após essa organização, foi criado o footer da aplicação.

## <u>Main-content</u>

Como se trata do conteúdo principal do site, o que está no meio, usamos a tag main,

dentre outras coisas, faz parte de uma boa prática de programação usar o main, indicando que se trata do conteúdo principal da página, isso faz com que tecnologias assistidas funcionem de maneira correta.

* Criamos a main logo acima do footer;

* Dentro da main criamos uma div chamada main-container;

* Criamos uma nav com uma classe header_navigation;

* Criamos dentro da nav uma div com uma classe chamada navigation;

* Dentro dessa div criamos um button com uma classe arrow-left;

* E dentro desse button colocamos uma imagem, uma seta para a esquerda que está dentro da pasta assets;

* Da mesma forma adicionamos a seta a direira, copiando e colando o mesmo button, apenas alterando o caminho e  o nome do botão;

O próximo passo e inserir o input ao lado desses botões, input da busca pelos artistas.

* Logo abaixo do último button abrimos outra div com a classe header-search;

* Colocamos a img correspondente, que é a search.png;

* Como nesse caso a imagen não está compondo o valor da tela, ou seja, ela não tem o valor de imagem, podemos deixar o alt sem nenhuma informação;

* E logo abaixo da img colocamos o inputo de fato;

* E nesse input colocamos um id que será o search input;

* Para o input colocamos um maxímo de 800 caracteres com o max-length;

* Adicionamos um place-hoder com o texto "O que você quer ouvir?";

* Após o input iremos adicionar outros botões;

* Criamos outra div com a classe header-login;

* E dentro dessa div criamos 2 botões, um inscreva-se(class="subscribe") o outro entrar(class="login");

* Criamos um novo arquivo css para estilizar o main separado dos demais;

<u>*Código completo;*</u>

```
<main>
    <div class="main-container">
        <nav class="header__navigation">
            <div class="navigation">
                <button class="arrow-left">
                    <img src="./src/assets/icons/small-left.png" alt="seta-esquerda">
                </button>
                <button class="arrow-right">
                    <img src="./src/assets/icons/small-right.png" alt="seta-diereita">
                </button>

                <div class="header__search">
                    <img src="./src/assets/icons/search.png" alt="">
                    <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?">
                </div>

                <div class="header__login">
                    <button class="subscribe">Inscreva-se</button>
                    <button class="login">Entrar</button>
                </div>
            </div>
        </nav>
    </div>
</main>
```

## <u>CSS main-content</u>

Iniciamos estilizando a classe <u>main-container</u>, que é o container principal do header content.

* Inciamos definindo um max-width de 80vw, que está relacionado a view-port, ou seja, está ocupando esse valor dentro da view-port;

* E colocamos um height de 100vh, que também está relacionado a view-port e responsividade, ocupa 100% da tela de altura;

* margin-left de 320px;

* margin-right de 56px;

Para o main-container é isso, o próximo é o .header__navigation.

* display-flex;

* justify-content com space-between;

* align-items center;

* padding de 16px;

* margin de 10px;

* border-radius de 8px;

* background-color #121212;

Agora partimos para o ".header__navigation .navigation" 

* Display flex;

* E usamos o justify-content com o space-arround, enquanto o space-between alinha os elementos justificado com os espaços iguais entre eles, o space-arround alinha os elementos e coloca os espaços em volta dos elementos;

* Align-items center;

Isso feito iremos alinhar as setas, iniciando com a seta a esquerda;

.header__navigation .navigation .arrow-left

* margin-right com 1.25rem de tamanho, o rem trata-se de uma unidade de medida que não é estatica, é relativa, ou seja, dependendo do tamanho da tela por exemplo, ele terá tamanhos diferentes;

Agora iremos estilzar as setas propriamente ditas, para isso podemos utilizar as duas classes seguido de virgula;

.arrow-left e .arrow-right

* Display flex;

* Align items center;

* justify-content center;

* width de 32px;

* height de 32px;

* background uma var(--bg-icon);

* background-color uma var(--bg-arrow-color) = --bg-arrow-color: rgba(0, 0, 07);

* border-radius de 50%; 

* border none;

* cursor pointer;

Agora o header login

.header__login

* display flex;

* align-items center;

Agora o header search

.header__search

* display flex;

* align-items center;

* width de 364px;

* height de 48px;

* margin-left de 8px;

* background-color de #242424;

* border-radius 500px;

* border 1px solid transparent;

Para a header search img

.header__search img

* width de 16px;

* height de 16px;

* margin-left de 10px; 

Para o input

.header__search input

* background transparent;

* border none;

* padding de 0px 100px 0px 12px;

* color #fff;

* text-overflow de ellipse, quando o texto fica muito grande ele adiciona ... três pontinhos ao conteúdo.

* overflow hidden, para esconder o conteúdo muito grande;

* white-space nowrap, evita a quebra de linha no input;

* outline com none para que o input não crie uma barra interna quando for clicado, selecionado, assim retiramos a borda do texto do input;

Botão de se inscrever

.header__login .subscribe

* color #a7a7a7;

* font size de 16px;

* font-weight de 700;

* background-color transparent;

* margin-right de 32px;

Botão de login

.header__login .login

* width de 100px;

* height de 48px;

* color preto, #000;

* font-size de 16px;

* font-weight de 700;

* border-radius de 40px;

E aqui finalizamos a parte do main content.

## <u>Aula 04</u>

Como desafio foi proposto fazer a parte do playlist-container.

```
<div class="playlist-container">
    <div class="result-playlists">
        <div class="playlist">
            <h1 id="greeting">Boa noite</h1>
            <h2 class="session">Navegar por todas as seções</h2>
        </div>
    </div>
</div>
```

CSS;

```
.playlist-container {
    margin: 10px;
    height: 68vh;
    padding-top: 16px;
    background-color: #121212;
    border-radius: 10px;
}

.playlist {
    margin: 24px;
}

.playlist #greeting {
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 48px;
}

.playlist .session {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
}
```

Após isso inserimos o código referente aos cards no html, para que posteriormente possamos estiliza-los com css.

```
         <!-- LIST ITEM 1 -->
          <div class="offer__scroll-container">
            <div class="offer__list">
              <section class="offer__list-item">
                <!-- CARD 1 -->
                <a href="" class="cards">
                  <div class="cards card1">
                    <img src="./src/assets/playlist/1.jpeg" alt="" />
                    <span>Boas festas</span>
                  </div>
                </a>

                <!-- CARD 2 -->
                <a href="" class="cards">
                  <div class="cards card2">
                    <img src="./src/assets/playlist/2.png" alt="" />
                    <span>Feitos para você</span>
                  </div>
                </a>

                <!-- CARD 3 -->
                <a href="" class="cards">
                  <div class="cards card3">
                    <img src="./src/assets/playlist/3.jpeg" alt="" />
                    <span>Lançamentos</span>
                  </div>
                </a>

                <!-- CARD 4 -->
                <a href="" class="cards">
                  <div class="cards card4">
                    <img src="./src/assets/playlist/4.jpeg" alt="" />
                    <span>Creators</span>
                  </div>
                </a>

                <!-- CARD 5 -->
                <a href="" class="cards">
                  <div class="cards card5">
                    <img src="./src/assets/playlist/5.jpeg" alt="" />
                    <span>Para treinar</span>
                  </div>
                </a>

                <!-- CARD 6 -->
                <a href="" class="cards">
                  <div class="cards card6">
                    <img src="./src/assets/playlist/6.jpeg" alt="" />
                    <span>Podcasts</span>
                  </div>
                </a>

                <!-- CARD 7 -->
                <a href="" class="cards">
                  <div class="cards card7">
                    <img src="./src/assets/playlist/7.jpeg" alt="" />
                    <span>Sertanejo</span>
                  </div>
                </a>

                <!-- CARD 8 -->
                <a href="" class="cards">
                  <div class="cards card8">
                    <img src="./src/assets/playlist/8.jpeg" alt="" />
                    <span>Samba e pagode</span>
                  </div>
                </a>

                <!-- CARD 9 -->
                <a href="" class="cards">
                  <div class="cards card9">
                    <img src="./src/assets/playlist/9.jpeg" alt="" />
                    <span>Funk</span>
                  </div>
                </a>

                <!-- CARD 10 -->
                <a href="" class="cards">
                  <div class="cards card10">
                    <img src="./src/assets/playlist/10.jpeg" alt="" />
                    <span>MPB</span>
                  </div>
                </a>

                <!-- CARD 11 -->
                <a href="" class="cards">
                  <div class="cards card11">
                    <img src="./src/assets/playlist/11.jpeg" alt="" />
                    <span>Rock</span>
                  </div>
                </a>

                <!-- CARD 12 -->
                <a href="" class="cards">
                  <div class="cards card12">
                    <img src="./src/assets/playlist/12.jpeg" alt="" />
                    <span>Hip Hop</span>
                  </div>
                </a>

                <!-- CARD 13 -->
                <a href="" class="cards">
                  <div class="cards card13">
                    <img src="./src/assets/playlist/13.jpeg" alt="" />
                    <span>Indie</span>
                  </div>
                </a>

                <!-- CARD 14 -->
                <a href="" class="cards">
                  <div class="cards card14">
                    <img src="./src/assets/playlist/14.jpeg" alt="" />
                    <span>Relax</span>
                  </div>
                </a>

                <!-- CARD 15 -->
                <a href="" class="cards">
                  <div class="cards card15">
                    <img src="./src/assets/playlist/15.jpeg" alt="" />
                    <span>Música Latina</span>
                  </div>
                </a>
              </section>
            </div>
          </div>
```

Inserir logo após o nav, dentro do playlist-container.

Após isso pronto inserimos também o código css correspondente a estilização de todo o grid de lista de artistas.

```
/* SCROLL */
.offer__scroll-container {
    max-height: 43vh;
    margin: 24px;
    overflow-y: auto;
  }

  .offer__scroll-container::-webkit-scrollbar {
    width: 1px;
  }

  .offer__scroll-container::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  /* FIM SCROLL */

  .offer__list-item {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 16px;
    gap: 16px;
    margin-bottom: 16px;

    /* CODIGO COM JS CALCULANDO OS CARDS POR COLUNA */
    /*display: grid;   define o modelo de layout do elemento como uma grade */
    /* gap: 16px; */
    /*grid-gap: 16px;   não é usado mais */
    /* margin: 0 auto; */
  }

  /* POSITION */
  /* principais são static, relative, absolute, fixed, e sticky. */

  .cards {
    position: relative; /* relative:
                            Comportamento em relação a si mesmo: O elemento é posicionado em relação à sua posição original.
                            Mantém espaço original: O espaço original que o elemento ocuparia não é alterado, mas você pode movê-lo com top, right, bottom ou left. */
    width: 220px;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
  }

  .cards span {
    padding: 16px;
    position: absolute;
    /* absolute:
                            Comportamento em relação ao ancestral posicionado mais próximo ou ao elemento raiz (se nenhum ancestral estiver posicionado).
                            Remove do fluxo normal: O elemento é removido do fluxo normal do documento, o que significa que outros elementos agem como se o elemento não estivesse presente. */
    color: var(--text-base-light);
    font-size: 24px;
    font-weight: 700;
  }

  /* COLOR CARDS */
  .card1 {
    background-color: rgb(0, 100, 80);
  }
  .card2 {
    background-color: rgb(132, 0, 231);
  }
  .card3 {
    background: rgb(30, 50, 100);
  }
  .card4 {
    background: rgb(140, 25, 50);
  }
  .card5 {
    background: rgb(232, 17, 91);
  }
  .card6 {
    background: rgb(83, 122, 161);
  }
  .card7 {
    background: rgb(142, 102, 172);
  }
  .card8 {
    background: rgb(20, 138, 8);
  }
  .card9 {
    background: rgb(30, 50, 100);
  }
  .card10 {
    background: rgb(233, 20, 41);
  }
  .card11 {
    background: rgb(80, 55, 80);
  }
  .card12 {
    background: rgb(216, 64, 0);
  }
  .card13 {
    background: rgb(186, 93, 7);
  }
  .card14 {
    background: rgb(0, 30, 80);
  }
  .card15 {
    background: rgb(60, 30, 80);
  }
  /* FIM COLOR CARDS */

  .offer__list-item img {
    position: absolute;
    right: 0;
    bottom: 0;
    height: auto;
    width: 107px;
    transform: rotate(25deg) translate(18%, -2%);
  }

  /* CARD ARTISTA */

  .artist {
    --column-count: 5;
    --grid-gap: 24px;
    --min-container-width: 372px;
  }

  .hidden {
    display: none;
  }

  .grid-container {
    grid-gap: var(--grid-gap);
    display: grid;
    grid-template-columns: repeat(var(--column-count), minmax(0, 1fr));
    min-width: var(--min-container-width);
  }

  .artist-card {
    background: #181818;
    border-radius: 8px;
    -ms-flex: 1;
    flex: 1;
    isolation: isolate;
    padding: 16px;
    position: relative;
    transition: background-color 0.3s ease;
    width: 100%;
  }

  .artist-card:hover {
    background-color: #252525;
  }

  .card-img {
    padding-bottom: 100%;
    position: relative;
    width: 100%;
    margin-bottom: 16px;
  }

  .artist-img {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: 50%;
  }

  .card-text {
    display: flex;
    flex-direction: column;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-height: 62px;
  }

  .card-text a {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
  }

  .artist-name {
    box-sizing: border-box;
    margin-block: 0px;
    font-size: 16px;
    font-weight: 700;
    padding-block-end: 8px;
  }

  .artist-categorie {
    color: #6a6a6a;
    font-weight: 400;
    font-size: 0.875rem;
  }

  .play {
    position: relative;
  }

  .play .fa-play {
    position: absolute;
    right: 10px;
    top: 120px;
    padding: 18px;
    background-color: #1db954;
    border-radius: 100%;
    font-size: 14px;
    opacity: 0;
    transition: all ease 0.4s;
  }

  .artist-card:hover .play .fa-play {
    opacity: 1;
    transform: translateY(-20px);
  }

  .play .fa-play:hover {
    padding: 20px;
    cursor: pointer;
  }

  #result-artist {
    padding: 20px 40px;
  }
  /* FIM CARD ARTISTA */
```

Algumas explicações sobre o layout;

* Criamos uma div que irá conter todos os cards, e estilizamos ela com valores que posteriormente serão utilizados para a responsividade, como;
  
         *Aqui temos a estilização do container que conterá todos os cards.*
  
  * ```
    .offer__scroll-container {
        max-height: 43vh;
        margin: 24px;
        overflow-y: auto;
      }
    ```

* Usamos para estilizar os cards o display grid, para que seja mais simples de separar cada card na mesma distância, usando o fr, que é uma inidade de medida que leva em consideração fragmentos da tela, sendo mais fácil estilizar a responsividade, pois não se trata de um valor fixo, mas sim de um valor que leva em consideração o tamanho de cada tela.
  
  * ```
      .offer__list-item {
        display: grid;
        justify-items: center;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 16px;
        gap: 16px;
        margin-bottom: 16px;
      }
    ```

Daqui iremos passar para o css responsivo com as medias queries, pórem, será bom retornar e tentar ir fazendo esse código aos poucos, para ir acompanhando o resultado, pois foi apenas copiado e colado no código.

## <u>*CSS media-queries*</u>

Então iniciamos criando outro arquivo css para estilizar as medias-queries e colocamos em na ultima posição do documento html, para que não seja sobscrito por outra propriedade css.

Neste arquivo;

* Primeiro, criamos os comentários do media-queries;
  
  * ```
    @media screen {
    
    }
    ```

* Para a estilização o mais importante é justamente a largura dos elementos;

* Usamos o and seguido de parênteses para inserir o tamanho de tela a que esse código irá funcionar;

* E aqui temos a extrutura básica para se iniciar o media-querie;

* ```
  // Resolução máxima de 1015px.
  @media screen and (max-width: 1015px){
  
  }
  ```

               *Essa é a extrutura básica para se iniciar o media-querie.*

* A partir daqui trabalhamos com o css do mesmo modo que vinhamos trabalhando.

* Copiamos a classe .offer__list-item para esse aquivo;
  
  * ```
    @media screen and (max-width: 1015px){
        .offer__list-item
    }
    ```

* Escolhemos essa classe pois é exatamente ela que está carregando display grid, e está definindo quantas colunas tem a tela;

* Adicionamos a propriedade grid-template-columns para definir quantas frações queremos que a tela tenha, ou seja, quantas colunas a tela deverá ter com essa resolução, então colocamos os fr's para indicar quantas colunas queremos, cada fr corresponde a uma coluna na tela;
  
  * ```
    // Aqui teremos dois cards aparecendo no display até a resolução
        máxima de 1015px, após isso ficam 5 cards.
    @media screen and (max-width: 1015px){
        .offer__list-item {
            grid-template-columns: 1fr 1fr;
        }
    }
    ```

               *Aqui dizemos que queremos que os cards sejam divididos em 2 frações, eles estão inseridos na classe .offer__list-item.*

# <u>*Estilizar o css responsivo, está faltando.*</u>

## <u>Java Script</u>

Agora estraremos na parte do javascript, porém nos deparamos com um problema, que é exatamente a falta de uma API para que o site possa consumir, pois é daí que vem os dados.

Para resolver temos duas opções, pois muitas vezes o back e o front estão sendo desenvolvidos ao mesmo tempo, e pode ser que aconteça do back não estar pronto ainda para que os dados sejão consumidos.

* Podemos colocar tudo mocado no código, com todos os valores;
* Ou fazemos uma API fake, com toda a extrutura que viría do back, então, consulmimos essa API fake, e quando o back ficar pronto apenas trocamos.
* Usamos uma extrutura completa do que será a API, com title, etc, todas as informações que a API original terá.

### <u>Criando a API fake</u>

Primeiramente iremos utilizar o JsonServer, que se trata de um pacote npm que tem essa função, ele sobe um servidor, nós criamos um arquivo, e ele sobe esse arquivo como se estivesse hospedado.

* No terminal do vscode digitamos o seguinte código;
  
  ```
  // -g para instalar globalmente
  carlos@carlos:~/Documentos/spotify-imersao-alura$ npm i json-server -g
  ```

Após instalar ele já estará habilitado para rodar em qualquer lugar do sistema.

* Requer a instalação do node;

* Criamos o arquivo que será a API;

* Inicial, criamos uma pasta chamada api-artists;

* Dentro desta pasta, api-artists, criamos o arquivo artists.json, que é o arquivo onde estará a extrutura toda;

* Extrutura da API;
  
  ```
  {
      "artists": [
        { "id": 1, "name": "Foo Fighters", "genre": "Rock", "urlImg": "https://i.scdn.co/image/ab67616100005174c884df599abc793c116cdf15" },
        { "id": 2, "name": "Michael Jackson", "genre": "Pop", "urlImg": "https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa" },
        { "id": 3, "name": "Emicida", "genre": "Hip Hop", "urlImg": "https://i.scdn.co/image/ab67616100005174908b4b4bc90e1518b68b4068" },
        { "id": 4, "name": "Chitãozinho e Xororó", "genre": "Sertanejo", "urlImg": "https://i.scdn.co/image/ab676161000051744606c59411c57f7b49588be4" },
        { "id": 5, "name": "Mc Coringa", "genre": "Funk", "urlImg": "https://i.scdn.co/image/ab67616d00001e02fe8f6dd361ad0f12b88c7f56" },
        { "id": 6, "name": "Arlindo Cruz", "genre": "Samba", "urlImg": "https://i.scdn.co/image/ab67616100005174181873f93056642d7b340839" },
        { "id": 7, "name": "Caetano Veloso", "genre": "MPB", "urlImg": "https://i.scdn.co/image/ab67616100005174e98de50f36cf1aa4bf047757" }
      ]
    }
  ```

*<u>Neste código temos a extrutura de uma API, o json de um objeto, artists, um array de varios artistas com suas propriedades.</u>*

* Cada artista tem um id;

* Nome;

* Gênero;

* E uma url da imagem, que é a mesa usada no spotify, poderiamos também baixar as imagens e adiciona-las ao conteúdo do site;

E assim temos nossa API pronta;

Para consumir essa API precisamos subi-la no json-server, para ele servir de fato esse arquivo como uma API.

* Passamos o seguinte comando no terminal do vs;
  
  ```
  * --watch - para que ele fique sempre assistindo essa API;
  * caminho da API;
  * porta da API
  json-server --watch api-artists/artists.json --port 3000 
  ```

* Se tudo estiver correto teremos um resultado como esse no terminal;
  
  ```
  Press CTRL-C to stop
  Watching api-artists/artists.json...
  
  ♡⸜(˶˃ ᵕ ˂˶)⸝♡
  
  Index:
  http://localhost:3000/
  
  Static files:
  Serving ./public directory if it exists
  
  Endpoints:
  http://localhost:3000/artists
  ```

* E clicando em localhost teremos essa saida no terminal;

* Ctrl + click em http://localhost:3000/artists teremos o Json carregado no navegador, uma lista de artistas;
  
  ![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-04%2021-55-33.png)

Agora iremos para o javascript para usar a API de fato.

## *<u>Javascript</u>*

Logo na primeira aula criamos um arquivo .js que ainda não foi utilizado.

Uma coisa muito importante é que o javascript deve ser declarado no final do doc html, antes do fechamento da tag body, fazemos para de certa forma, atrasar o carregamento do javascript, pois se houver algum erro no código javascript não irá afetar o carregamento da página como um todo.

Se o script estiver quebrado podemos ter uma tela em branco assim que carregar-mos a página.

* Então usamos a tag script para declarar o js na página;

```
  <script type="text/javascript" src="./script.js">

  </script>
```

* Após declarar o js no html, usamos o console.log para testar se o documento js está realmente linkado na página;

```
// Digitamos esse código no .js
console.log("Documento js carregado com sucesso!!");
```

* E temos essa saida no console do navegador;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-06%2020-20-58.png)

*Após o teste excluimos o código console.log.*

Quando criamos o doc html inserimos um input com um id, "search-input", então quando chegarmos no js iremos usar esse id para manipular este input.

Aqui entramos em um conceito muito importante do js que é o conceito de DOM, (Modelo de objeto documentos), que será uma representação de uma arvore daquele documento html, que terão todos os elementos que foram compostos.

Se olharmos no inspecionar, em elements, veremos vários elementos, que são uma representação do DOM, temos o body, dentro do body temos as divs, e assim por diante, e é como se cada elemento fosse um nó dessa árvore.

Se digitarmos document, no console, ele irá trazer todo o documento html, literalmente temos acesso a todas as informações do documento.

Através do document podemos manipular o doc html.

* Conseguimos colocar comportamentos, todos os elementos conseguimos manipular com javascript.

Voltando ao documento javascript, iremos começar a codificar o input.

* Então no doc .js começamos criando uma constante const chamada searchInput;
* Que irá receber, será atribuido um document(que terá todos os elementos da árvore do doc html);
* Seguido de uma função muito importante em js que é o getElementById;
* Então ele vai jogar para essa constante, "searckInput", a representação daquele elemento que tem o id search-input;

```
const searchInput = document.getElementById('search-input')
```

Agora iremos fazer uma manipulação de eventos, ou seja tudo que tem interaçã na tela, seja do usuário ou seja da própra tela, por exemplo, o carregamento da tela é um evento, um click em um botão é um evento, aqui iremos usar o evento de input, pois é o que estamos usando quando digitamos no field do input.

* No doc js, pulamos uma linha após a declaração da const;

* E usamos o document.addEventListener, que é basicamente que ele ficará escutando o evento, e quando o evento acontecer terá um resultado na tela;

* O evento será o de input;

* E essa função EventListener irá receber outra função como parâmetro, uma função anônima;

* Então podemos declarar essa função logo no EventListener, após o 'input';

* Ou podemos usar uma ArrowFunction, que é uma notação do Ecmascript;

* Opatmos por declarar a function de uma maneira tradicional, e é essa função que irá ter todo o código, ou seja, o comportamento que esperamos;

```
document.addEventListener('input', function() {

})
```

* Dentro da function declaramos outra const que será a searchTerm, que é o que iremos digitar;

* Essa const irá receber o valor do searchInput com searchInput.value, onde estaremos resgatando o que for digitado no input;

* Usamos o toLowerCase para deixar tudo minusculo;

```
const searchInput = document.createElement('search-input')

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
})
```

Então criamos uma lógica com o if;

* Se a searchTerm estiver vazia, *<u>usamos os três iguais na comparação para garantir que além da comparação de ser iguais validamos também se são iguais e do mesmo tipo</u>* ;

* Então com essa lógica iremos ocultar os cards que são mostrados nos grids, ou seja, oculta a parte dos cards e mostra somente a do artista que buscamos;

* Se não digitar-mos nada ele ira mostrar os cards todos igual já estava;

* Quando digitar-mos alguma coisa teremos outro comportamento.

* Para isso precisamos inicialmente ocultar a parte dos cards, pois do contrário irá sobrepor tudo;

* Para isso precisamos declarar outra const,  que irá pegar a parte que está mostrando os cards;

* Essa const será a const resultArtist, que irá receber um document.getElementById('search-input'), colocando o id de onde estão os cards, que será a result-artist;

```
const resultArtist = document.getElementById('result-artist')
```

* Aproveitamos e criamos também a const que será responsavel por manipular quando as playlists forem mostradas;

* Declaramos a const colocando o id da parte que irá mostrar as playlists, que será o result-playlists;

Então quando não digitar-mos nada iremos adicionar uma classe onde mostramos a play list;

* Então adicionamos o código ao if, que será o resultPlaylist.classList.add;

```
document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        // Com esse código estamos adicionando uma classe ao elemento
        resultPlaylist.classList.add()
    }
})
```

* Dentro dessa classe add() colocamos um hidden, de esconder.

* Então se nada for digitado ele adicionará essa classe ao elemento, escondendo seu conteúdo.

```
document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden')
    }
})
```

* A classe já está criada com display none;

* E vamos também retirar essa classe do resultArtists, pois no código html o elemento já esta com a classe hidden adicionada;

```
        <div id="result-artist" class="hidden">
          <div class="grid-container">
            <div class="artist-card" id="">
              <div class="card-img">
                <img id="artist-img" class="artist-img" />
                <div class="play">
                  <span class="fa fa-solid fa-play"></span>
                </div>
              </div>
              <div class="card-text">
                <a title="Foo Fighters" class="vst" href=""></a>
                <span class="artist-name" id="artist-name"></span>
                <span class="artist-categorie">Artista</span>
                </a>
              </div>
            </div>
          </div>
        </div>
```

Isso porque nada foi digitado, ou seja, por padrão ela irá iniciar com hidden, pois nada foi digitado.

* E removemos a classe hidden com o seguinte código;

```
resultArtist.classList.remove('hidden');
```

* Ou seja, um mostra o outro esconde.

* Por fim colocamos um return apenas para parar a execução, pois não precisamos que nada mais aconteça, se não tem nada digitado, não tem nada para acontecer.

Agora iremos consumir a API fake que havíamos feito anteriormente.

* Para isso inicialmente declaramos uma função e iremos chama-le de requestApi, que irá receber como parâmetro o searchTerm, que é o que digitamos no input;

```
function requestApi(searchTerm) {

}
```

* E para consumir a API usamos um método da API do próprio javascript que se chama fetch, trata-se de um método bem simples que usamos para fazer requisições;

* Então declaramos o fetch e colocamos como parâmetro a url da API que iremos consumir;

* Para ficar mais organizado podemos declarar uma const que irá receber a url da API, que criamos no inicio, assim, no dia-dia facilita para quando o back-end entregar a API correta, somente mudamos essa url;

```
function requestApi(searchTerm) {
    const url = "http://localhost:3000/artist?"
    fetch()
}
```

* Podemos usar o query parameter para trazer apenas o artista que for digitado, ou algo aproximado a ele.

* Então adicionamos a url um name_like e usamos também um template string ${} para passar-mos a variável que estamos recebendo como parâmetro;

* IMPORTANTE - Neste ponto houve um problema, mesmo a requisição estando correta, não retornava o artista apenas com uma letra aproximada, o bug estava na versão do javascript server, desinstalar a versão padrão e instalar essa versão resolver o bug;

```
// Aqui desinstalamos a versão padrão
npm uninstall -g json-server


// Instalar essa versão correta
npm install -g json-server@0.17.0
```

* E já colocamos dentro dessa template o searchTerm;

* Então temos uma string montada com um valor de parâmetro;

```
const url = `http://localhost:3000/artist?name_like${searchTerm}`
```

* Agora temos a url, então iremos fazer a chamada dessa url;

* Passamos a url como parâmetro no fetch;

* E usamos o them, que é um método de programação assíncrona do javascript, para que possamos fazer requisições em API's, fazer leituras em arquivos, etc...
  
  Ele fica escutando a requisição, e nos manda a resposta assim que estiver tudo pronto.

* Dentro do them declaramos uma variável que irá receber a resposta do que vier no them;

* Com uma arrow function indicamos o response.json, para que ele pegue essa resposta, converta em json para que possamos trabalhar;

```
function requestApi(searchTerm) {
    const url = `http://localhost:3000/artist?name_like${searchTerm}`
    fetch(url) 
        .then((response) => response.json())
}
```

* Colocamos mais um them, logo abaixo do já criado, que irá pegar o resultado do que foi resolvido no them anterior, do json que será disponibilizado para nós, para que possamos trabalhar como iremos mostrar a playlist, artista e etc...

* Então criamos esse them com uma variável result;

* E esse result iremos passar como parâmetro para outra função que irá se chamar, displayResults, que é iremos mostrar esconder e tudo mais.

* Então passamos result como parâmetro da arrow function;

```
function requestApi(searchTerm) {
    const url = `http://localhost:3000/artist?name_like${searchTerm}`
    fetch(url) 
        .then((response) => response.json())
        .then((result) => displayResult(result))
}
```



### Display results

Agora iremos montar a função que irá mostrar os resultados na tela.

Iremos declarar o displayResults para fazer com todos os itens apareçam de forma correta, por exemplo, se digitar-mos um artista todo o card dele irá aparecer.

* Inicialmente escondemos a lista de cards com as playlists, colocando a classe hidden a variável, passando como parâmetro o result da outra função.

*Isso irá esconder os cards das playlists.*

```
function displayResult() {
    resultPlaylist.classList.add('hidden');
} 
```

* Continuando criamos uma const com o nome artistName, que é onde iremos pegar o nome do artista, que irá receber um getElementById, passando como parâmetro o id artist-name;

```
function displayResult() {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
} 
```

* Repetimos a mesma linha de código, apenas alterando para img;

```
function displayResult() {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');
} 
```

O próximo passo é fazer um foreach com o que recebemos de resultado.

```
    result.forEach(element => {

    });
```

* Onde cada element será um item que ele está recebendo de resultado;

* Pegamos o artistName que recebemos como resultado, o nome do artista;

* Montamos dessa forma;

```
result.forEach(element => {
    artistName.innerText = element.name;
});
```

* Usamos o innertext para que ele adicione de forma correta os dados do artista na tela;

* Para a imagem do artista usamos o src, para definir de onde está vindo a imagem do artista;

```
artistImage.src = element.urlImg;
```

Aqui montamos a parte dinâmica dos cards, que irá carregar cada artista de acordo com o resultado da API.

E por fim adicionamos um result artist para enfim exibir o artista na tela, com um remove hidden para que mostre o card de forma correta.

```
// Aqui retornamos o artista e removemos o hidden da classe do card
resultsArtist.classList.remove("hidden");
```

Ao final temos uma animação, de um botão flutuante, para dar play na playlist.

Com um efeito criado no javascript, o botão aparece e some quando passamos o mouse pelo card.



## Frameworks e eficiência:

### Introdução ao React

O React é um biblioteca javascript, é tido hoje como um framework, mas trata-se de uma biblioteca para fazer interfaces.

Por ser uma biblioteca javascript, usamos todos os conceitos vistos até agora, manipulações do DOM.



### Criando o projeto React



Iniciamos criando o projeto react, para isso, iniciamos o terminal e digitamos o seguinte código para criar o projeto;

```
npx create-react-app
```

Onde;

* NPX é o executor do npm;

* Para não termos que instalar o pacote de criar o projeto, usamos o npx que já vai direto, pega o pacote e cria o projeto.

* E damos o nome de spotify-react

Após dar enter ele irá gerar todos os arquivos.

Uma detalhe na  criação é que hoje é aconselhavel criar aplicações com nextjs que é um framework react.

O nextjs trata-se de um framework, sendo assim já nos tras toda a extrutura necessária para trabalhar-mos com react.



Após instalado e criado o projeto, damos um cd na aplicação e iniciamos com o vscode;

```
Happy hacking!
carlos@carlos:~$ ls
 apache-tomcat-9.0.71                       LuizFernandoFreitasSilva.pdf
'Área de Trabalho'                          Modelos
'Check list avaliação CAIXA T. 11.07.pdf'   Música
 ComprovantesFinanceiros                   'PIX - Documentos Google.pdf'
'Curriculum Carlos Martins da Silva.docx'   Público
'Curso HTML-CSS'                            R
 Documentos                                 server
 Downloads                                  snap
 dwhelper                                   spotify-react
 eclipse-workspace                          teste.c
 hs_err_pid9357.log                         user
 Imagens                                    Vídeos
carlos@carlos:~$ 

```

```
carlos@carlos:~$ cd spotify-react/
carlos@carlos:~/spotify-react$ code .
carlos@carlos:~/spotify-react$ 

```

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-12%2016-05-21.png)



## Extrutura das pastas

* Node_modules - É onde ficam armazenados todos os pacotes que a aplicação presica para funcionar;

* Public - Possui alguns arquivos como, favicon, index.html, etc...

* SRC - É a pasta onde iremos efetivamente trabalhar, ela conterá os arquivos de app, app.css, app.js, 



## Conhecendo os arquivos;



* App.js - Aqui temos a extrutura inicial do app, possui uma extrutura básica para mostrar algo na tela, possui uma div algumas classes.



Iniciamos a aplicação com o seguinte código;

```
npm start
```

Se tudo estiver correto ele inicia automáticamente projeto, inclusive em um navegador;

![](/home/carlos/Imagens/Capturas%20de%20tela/Captura%20de%20tela%20de%202024-02-12%2016-15-00.png)

Inserimos um titulo h2 para teste;

```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Imersão front-end Alura 2024</h2>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Usamos isso como se fosse um console.log.



Ao digitar-mos h2 e dar um tab ele não completa o código, isso porque o react trabalha com um conceito diferente, o react trabalha com um conceito de jsx, que é uma extrutura que usa html e javascript no mesmo arquivo.

Possui elementos do html e do javascript, como funções, return, que são do javascript, e os elementos html, divs, ps, a's.

Então tudo que precisamos manipular com javascript que irá alterar o html, podemos fazer tudo no mesmo arquivo.

Possuimos tbm no react o conceito de componentização, tudo no react é um componente, e trabalha a partir desse componente o que será a tela.

O que tinhamos no projeto, o header, as grids, o footer, tudo pode ser um componente.

Com o react podemos criar diversos componentes, fazelos ter comportamento diferente dos demais componentes.

Para esse projeto iremos recriar o header com react.



## Header componente



Para iniciar criamos dentro da src outra pasta que será a pasta header,

e dentro dela colocaremos tudo o que estiver relacionado a header.

Nessa pasta começamos a pensar na extrutura de um componente.

* Dentro da pasta Header criamos duas pastas, header.js e header.css;

* Dentro do arquivo header.js importamos o react;

```
import React from "react";
```

* Importamos o arquivo css para esse componente;

```
import React from "react";
import './Header.css'; 
```

* Decaramos uma constante Header, isso porque iremos exportar essa função de header. Criamos essa função, e iremos fazer o retorno que é a extrutura do header, a mesma que fizemos anteriormente.

```
const Header = () => {
    return()
}const Header = () => {
    return(

        
    )
}
```

* Dentro do return iremos colocar o que foi feito no header anterior, em html e css.

* Retornamos ao projeto e pegamos a extrutura do header.

```
      <nav class="header__navigation">
        <div class="navigation">
          <button class="arrow-left">
            <img src="./src/assets/icons/small-left.png" alt="" />
          </button>
          <button class="arrow-right">
            <img src="./src/assets/icons/small-right.png" alt="" />
          </button>

          <div class="header__search">
            <img src="./src/assets/icons/search.png" alt="" />
            <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
              placeholder="O que você quer ouvir?" value="" />
          </div>
        </div>

        <div class="header__login">
          <button class="subscribe">Inscreva-se</button>
          <button class="login">Entrar</button>
        </div>
      </nav>
```

* Precisamos alterar algumas coisas, por exemplo, no projeto anterior as classes são chamadas de classes, no react são classname, por isso precisamos alterar o nome de classes.

```
import React from "react";
import './Header.css';

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src="./src/assets/icons/small-left.png" alt="" />
                </button>
                <button className="arrow-right">
                    <img src="./src/assets/icons/small-right.png" alt="" />
                </button>

                <div className="header__search">
                    <img src="./src/assets/icons/search.png" alt="" />
                    <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
                        placeholder="O que você quer ouvir?" value="" />
                </div>
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
}
```

* Para termos as imagens do projeto, copiamos a pasta assests para o projeto react.

* Colamos a pasta assets dentro da src.

* Para usar as imagens precisamos criar uma variável que irá pegar o caminha dessa imagem, e depois iremos fazer o import dessa variável.

* Para isso criamos um import com o nome smallRight, from e o nome do caminho da imagem;

```
import smallRight from "./src/assets/icons/small-left.png";
```

* Como tudo está dentro da src mudamos o caminho para ../assets...; 

* No html passávamos o código completo, porém no react usamos o conceito de interpolação, que é pegar uma variável e usa-la para montar o template.

* Então passamos entre chaves o smallLeft;

* Retiramos os parênteses para dizer que não é uma palavra.

```
<button className="arrow-right">
    <img src={smallLeft} alt="" />
</button>
```

* Fazemos o mesmo com a imagem do search;

* Agora iremos exportar a constante Header;

* Para isso vamos ao final do código, fora mesmo, e digitamos o seguinte;

```
import React from "react";
import './Header.css';
import smallRight from "../assets/icons/small-right.png";
import smallLeft from "../assets/icons/small-left.png";
import search from "../assets/icons/search.png";


const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="" />
                </button>

                <div className="header__search">
                    <img src={search} alt="" />
                    <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
                        placeholder="O que você quer ouvir?" value="" />
                </div>
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
}

export default Header;
```

Para que esse componente funcione ele precisa ser chamado em algum lugar do código, precisa ser importado e chamado no código.

Então voltamos a função App, que é nossa função principal.

* Apagamos todo o conteúdo que está ali, e chamamos esse header que acabamos de criar;

* E dentro do return colocamos o Header, ele já irá importar o componente;

* Ele deve ser posto entre os sinais de maior e menor, <>, como se fosse um elemento html;

* Adicionamos ao documento css o css relativo a esse código.

* Mudamos uma propriedade de borda do botão inscrever-se.



### Alterando a cor do background globalmente



Para isso usamos o app.css que já veio na extrutura quando criamos o projeto.

* Apagamos tudo que está nesse arquivo e colocamos a regra do body.

Para desafio fica fazer todo resto com react.

Por exemplo, para se criar o main, podemos criar uma pasta separada chamada main, codifica-la e depois importa-la para o index principal do projeto para ser exibida na tela.
