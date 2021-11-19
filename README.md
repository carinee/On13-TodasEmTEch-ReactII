# React II ❤️
``Nosso dontpad: http://dontpad.com/on13-react``

## `Chamada, apresentação das monitoras e acordos`
<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela

Conteúdo da aula: 
>> vamos avançar no aprendizado de react. Vamos conhecer um pouco mais do universo dessa ferramenta incrível, os conceitos fundamentais de hooks e criar mais alguns projetinhos. 🚀

1) Introdução aos Hooks e eventos (onChange e onClick)
2) State - useState
3) UseEffect - Consumindo API em react
4) Criando Rotas (react router dom)

<br>
<br>

## 1) Introdução aos Hooks e eventos (onChange e onClick)

Em 2018, os hooks chegaram como uma solução para que não precisassemos escrever componentes usando classes.
Nós temos hooks internos, que são algumas funções prontas que podemos usar em nossos projetos de react. E temos também a possibilidade de criar nossos próprios hooks costumizados.

Quando você se deparar por aí com alguma função dentro do react escrita assim, esses são os hooks: useState, useEffect, useMemo, useCallback entre outros.

Hoje, vamos aprender useState e useEffect. Já tô ansiosa para as coisas incríveis que vamos construir juntas.

Agora, sabe os eventos de interação das usuárias que a gente usa no javascript? Com react também podemos usar. :) 
Vamos aprender como usar o onChange e o onClick. 

Mas por quê a gente não vai ver tudo de evento e hooks? São muitas possibilidades e não teríamos tempo suficiente. Mas essa aula aqui é uma introdução para que você saiba que tudo isso existe e que você pode e deve continuar estudando. Belezinha? <3


## Mão no código:

| Recurso | Descrição |
| --- | --- |
| `onClick` | Mostrando no console o evento de click funcionando! |

| Recurso | Descrição |
| --- | --- |
| `OnChange` | Mostrando no console o valor digitado num formulário!! |

## 2) State - useState

Lembra o exemplo do perfil do instagram? Eu disse que uma das soluções para se fazer isso é usando props. Um complemento seria usando state, que é o super poder passado para o componente para que ele possa lidar com dados e atualizar a tela toda vez que um evento acontecer (com uma pessoa usuária interagindo ou alguma configuração que a gente tenha criado).

Vamos aprender praticando:

1) Antes de tudo você precisa importar de dentro do react o hook useState

```
import { useState } from 'react'
```

2) Dentro do seu componente antes do retorno você destrutura um array que recebe duas informações
 >> uma variável onde vamos guardar nosso valor inicial e suas futuras atualizações
 >> uma função que vai receber a lógica para atualizar a variável

```
const [contador, setContador] = useState(0)
```
> dentro do seu estado inicial podemos passar valores de qualquer tipo de dados em javacript, nesse caso aqui começamos com o número zero, mas poderia ser um array, um objeto, uma string entr outros.

3) Podemos declarar a lógica da nossa função que irá atualizar nossa variável

```
setContador(contador += 1)
```
4) Podemos dizer quando queremos que nossa função atualizadora seja chamada a partir de uma configuração ou de um evento
```
setInterval(
  setContador(contador += 1),
  1000
)
```
ou 

```
function handleClick() {
  setContador(contador += 1)
}
```
5) Usar nosso evento no html do componente

```
<button onClick= {handleClick}>click me</button>
```

6) Chamar o estado no html do
```
<p>{contador}</>
```

**Exemplos:**
| Recurso | Descrição |
| --- | --- |
| `Contador de clicks` |  Agora vamos treinar criar componentes, guardar memória no componente e atualizar na tela a quantidade de vezes que um botão está sendo clicado. |

| Recurso | Descrição |
| --- | --- |
| `Contador` |  Agora vamos treinar criar componentes, guardar memória no componente e atualizar na tela um contador que soma 1 ou diminui 1 toda vez que o botão for clicado.|

| Recurso | Descrição |
| --- | --- |
| `Relógio` |  Vamos criar um componente que retorna nosso horário local e atualiza automaticamente na tela|


## 3) UseEffect - Consumindo API em react

O useEffect é o hook que nos possibilita gerar efeitos colaterais na tela quando alguma variável modifica. 

``Ciclo de Vida?``

- Quando a página carrega -> se parece com didMount -> o segundo parametro é um Array vazio.
- Quando uma ou mais variáveis atualizam -> se parece com didUpdate -> o segundo parametro é um Array com as variaveis.
- Quando um componente é destruído -> se parece com willUnMount - dentro do corpo da função retorna uma outra função que vai ser executada quando o componente desmontar.

Com um exemplo vai ficar bem melhor de entender. Vamos lá!

1) Antes de tudo você precisa importar de dentro do react o hook useEffect

```
import { useEffect } from 'react'
```

2) Dentro do seu componente antes do retorno chama a função useEffect que recebe dois parametros.
 >> uma arrow function que vai determinar a ação do efeito colateral
 >> um array que recebe as dependências, ou seja as variáveis que determinam quando essas mudanças devem acontecer

```
useEffect(() => {
  setLista()
}, [])
```
> quando esse array aparece vazio, significa que a interface irá receber os efeitos colaterais quando a tela for carregada

> geralmente utilizamos useEffect com useState

**Exemplos:**

| Recurso | Descrição |
| --- | --- |
| `API` |  Chegou o grande momento de consumir uma api externa e renderizar os dados na tela, vamos usar o useEffect e useState para isso. |

| Recurso | Descrição |
| --- | --- |
| `Busca` | Vamos consumir uma api externa, mostrar lista na tela e através de uma busca, vamos mudar o estado apenas mostrando na tela o item digitado. |


## 4) Criando Rotas (react router dom)

Lembra que com react estamos construindo SPA(single page application)? O que significa dizer que na real a gente só construiu uma única página. E quando a gente precisa criar um menu e algumas páginas diferentes. Precisamos usar uma biblioteca que nos ajude com isso, a construir rotas no react.

Para que no fim das contas, quando clicarmos no menu ou alterarmos na URL a gente consiga visualizar o conteúdo correto. Vamos aprender a usar a biblioteca react-router-dom.

1) Vamos instalar com o yarn 

```
yarn add react-router-dom@5.2.0
```

2) Vamos criar o arquivo que irá gerenciar nossos endereços

```
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../Pages/Home'
import Sobre from '../Pages/Sobre'
import Portfolio from '../Pages/Portfolio'
import Contato from '../Pages/Contato'

function Routes(){
  return(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>                
            <Route path="/sobre" component={Sobre}/> 
            <Route path="/portfolio" component={Portfolio}/>    
            <Route path="/contato" component={Contato}/>       
        </Switch>   
    </BrowserRouter>
  )
}
export default Routes
```

3) Vamos criar o menu

```
import { Link } from 'react-router-dom'

const Menu = () =>{
  return(
    <ul className="menu">
      <li>
        <Link className="link" to="/">Home</Link>
      </li>
      <li>
        <Link  className="link" to="/sobre">Sobre</Link>
      </li>
      <li>
        <Link  className="link" to="/portfolio">Portfólio</Link>
      </li>
      <li>
        <Link className="link" to="/contato">Contato</Link>
      </li>
    </ul>
  )

}

export default Menu
```

4) Podemos usar o menu nas páginas

5) No app em vez de chamar cada página, iremos usar as Rotas

```
import './Styles/global.css'
import Routes from './Routes/Routes'

function App() {
  return (
    <div>      
      <Routes/>    
    </div>   
  )
}

export default App;
```

**Tarefinha de sala:**

| Nome | Descrição |
| --- | --- |
| `Meu portfólio` |  Vamos criar um site básico com 4 páginas estilizadas e criar seu roteamento com react router dom.|

---
**Desafio:**

#### Calma! É só mais uma TAREFINHA DE CASA pra chamar de sua! Já treinamos bastante com nossos exemplos na aula!

Vamos criar um projetinho react do zero com direito a componetização, consumo de dados externos de uma API pública, uso de props e hooks internas(state e effect).

O projeto deverá ter esse comportamento:<br>
  <img src="https://media.giphy.com/media/CvkRAPE68tWueH1Gp8/giphy.gif" alt="gif" width="300">

> Passo a passo:
1) Crie um projeto react
2) Apague as informações default
3) Consuma uma API externa
4) Crie um componente título que recebe o texto: "Meu Segundo Projeto React do Zero", a ser renderizado por props ou children
5) Crie 1 componente que mapeia os dados da lista da API e retorna uma lista, ele também tem um input que pega o texto digitado para atualizar o estado do componente, mostrando na tela somente o valor digitado.
6) Import no App.js os componentes criados, perceba os erros/warnings que o terminal/console mostra, resolva e faça o projeto funcionar.
7) Suba esse projeto no github, atualize o read me contando tudo o que você aprendeu e usou. 
8) Entregue o link do seu github pelo classroom.
9) Arraseee!


#### Vamos nos conectar!
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [tiktok](https://www.tiktok.com/@simaraconceicao?)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [blog](https://simaraconceicao.com)
