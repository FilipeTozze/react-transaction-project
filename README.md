# Projeto Transações - ReactJs

Este projeto simula uma aplicação mobile onde é possível verificar histórico de transações já realizadas e criar novos pagamentos que é salvo em um banco de dados local em `Json`. O intúito é fazer a busca dos registros já existente somente na primeira vez que abrir a aplicação e durante a navegação, utilizar apenas o próprio estado como fonte de informação, inclusive os novos registros que forem inseridos.


## Tecnologias Utilizadas

[Create React App](https://github.com/facebook/create-react-app)
[Redux](https://redux.js.org/)
[Styled](https://styled-components.com/)
[Axios](https://github.com/axios/axios)
[Unform](https://unform.dev/)
[Json Server](https://github.com/typicode/json-server)
[Yarn](https://yarnpkg.com/)


### Iniciando a aplicação

Para que consiga ver em funcionamento, é necessário iniciar o banco de dados json para que a aplicação front-end possa consumir os dados que nele contém. Para fazer isso, utilize o comando `yarn server` e será levantado um banco de dados localmente na porta [http://localhost:3001](http://localhost:3001). Para inicar a aplicação em react, utilize o comando `yarn start` e será aberto em seu navegador o caminho [http://localhost:3000](http://localhost:3000).

