# GESTOR DE CRISES - FRONT END EM REACT
# desenvolvido por: Leonardo Arouca

Este projeto é o material desenvolvido pelo Aluno Leonardo Arouca , da disciplina **Desenvolvimento Front-end Avançado** 

Basicamente a aplicação cadastra em um arquivo store.json os inputs informados pelos usuárioas visando simular a operação do sistema.
A aplicação consiste em três páginas , Home , Cadastro e consulta.
Home - tela inicia que possui um atalho/link para tela de consulta.
Cadastro - tela de adição de informação no arquivo json , após cadastro ele direciona a aplicação para tela de consulta para visualizar a inclusão ocorrida.
Consulta - tela de exibição das informações inseridas e que foram salvas no arquivo json. Possiu a função editar e excluir

Segue link do Figma: https://www.figma.com/file/2am0y7uzypGprgjhXVNhqi/MVP-FRONT-END?type=design&t=khYmrijEfDKWvCvS-6


## PARA EXECUÇÃO DO GESTOR DE CRISES

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado. 

Após clonar o repositório, é necessário ir ao diretório raiz do projeto e pelo terminal executar os comandos descritos abaixo.

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.


Para executar a interface basta executar o comando: 

```
$ npm start
```

```
$ npm install json-server
```

Este comando instala as dependências/bibliotecas, json-server para podermos armazenar no arquivo store.json

```
$ backend": "json-server --watch store.json --port 5000
```

Este comando chamamos de backend o comando json-server / watch para que possamos da o run do backend para disponibilizar o arquivo store.json


Para executar a interface basta executar o comando: 

```
$ npm run backend
```

Este comando roda o backend que foi simulado para execução da api

Abra o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.
