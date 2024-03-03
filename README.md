# Desafio BeMobile Front End
A aplicação frontend é construída com React, utilizando Vite como ferramenta de desenvolvimento e TypeScript para tipagem estática. Renderiza os dados de uma API JSON, apresentando informações detalhadas sobre os funcionários da empresa de forma organizada e acessível aos usuários. Possuindo um campo de busca para pesquisa de dados filtrados.

# Versão Demo - Deploy 
[Link do projeto](https://projeto-be-mobile-desafio-front-end.vercel.app/)


![Descrição da imagem](src/assets/images/HomePage.jpeg)


# Como funciona?
Este projeto é uma aplicação front-end desenvolvida em React com Vite, destinada a exibir e gerenciar informações de funcionários. A aplicação apresenta uma tabela dinâmica de funcionários com opção de busca eficiente, permitindo aos usuários filtrar sua busca inserindo dados específicos no campo de busca, como nome, cargo ou número de telefone, proporcionando uma experiência de usuário personalizada. Além disso, a aplicação é responsiva, adaptando-se de forma fluida tanto para dispositivos web quanto móveis, garantindo uma experiência consistente em todas as plataformas.

#### Tela Principal - Tabela de Funcionários
- Apresenta os dados de todos os funcionários disponíveis no banco;
- Caso uma busca filtrada seja executada, a tabela exibe somente o resultado relacionado;
- Em caso de falha na busca de dados, é exibido um alerta informando o erro para o usuário;
- Os dados exibidos são: Nome, Cargo, Foto de Perfil, Data de Admissão e Número de Telefone;

![table](src/assets/images/tableList.jpeg)

#### Campo de Pesquisa - Busca Filtrada
- Possui um input para busca de nome, cargo ou telefone, para serem enviados para API e renderizados na tabela;
- Em caso de sucesso, o usuário recebe uma busca filtrada com os dados relacionados a pesquisa;
- Em caso de falha é exibido um alerta informando o erro para o usuário;
- Se a busca for feita com o campo de pesquisa vazio um alerta informa o erro para o usuário.

![search](src/assets/images/SearchBar.jpeg)

#### Versão Mobile

![mobile1](src/assets/images/mobile1.jpeg)

![mobile2](src/assets/images/mobile2.jpeg)

# Motivação 

Minha motivação foi desenvolver uma tabela de dados eficiente que exibe informações dinâmicas dos funcionários, permitindo uma busca filtrada para melhorar a experiência do usuário. Isso não apenas torna a aplicação mais eficiente, mas também oferece uma interação intuitiva e facilita a localização rápida de informações relevantes, contribuindo para uma experiência de usuário mais satisfatória.

# Tecnologias Utilizadas
Para este projeto foram utilizadas:

  - React;
  - Vite;
  - Axios;
  - Eslint;
  - Styled Components;
  - Dayjs;
  - Sweet Alerts;
  - Type Script;
  - React Router.

# Como rodar em desenvolvimento
Para executar este projeto em desenvolvimento é necessário seguir os passos abaixo:

- Clonar o repositório ;
- Baixar as dependências necessárias com o comando: npm install;
- Para rodar o projeto em desenvolvimento, execute o comando npm run dev.

# Como Obter os dados da API Json Server
Para acessar os dados dinâmicos, realizei o deploy da API que compartilha as informações dos funcionário:

- Crie um arquivo .env na pasta raiz do seu projeto;
- Crie uma variável de ambiente e adicione o link do deploy da API:   VITE_API_URL= (link do deploy)
- Como no exemplo, adicione o seguinte link do local informado: https://json-api-alpha-dun.vercel.app/

# BeMobile Front End Challenge
The frontend application is built with React, using Vite as a development tool, and TypeScript for static typing. It renders data from a JSON API, presenting detailed information about company employees in an organized and accessible manner. It features a search field for filtered data search.

# Demo Version - Deployment
Project Link

![Descrição da imagem](src/assets/images/HomePage.jpeg)

# How It Works?
This project is a frontend application developed in React with Vite, designed to display and manage employee information. The application features a dynamic table of employees with an efficient search option, allowing users to filter their search by entering specific data in the search field, such as name, position, or phone number, providing a personalized user experience. Additionally, the application is responsive, adapting fluidly to both web and mobile devices, ensuring a consistent experience across all platforms.

#### Main Screen - Employees Table
- Displays data for all employees available in the database;
- If a filtered search is performed, the table only displays the related result;
- In case of failure to retrieve data, an alert is displayed informing the user of the error;
- The displayed data includes: Name, Position, Profile Picture, Hire Date, and Phone Number;

![table](src/assets/images/tableList.jpeg)

#### Search Field - Filtered Search
- Features an input field for searching by name, position, or phone number, to be sent to the API and rendered in the table;
- Upon successful search, the user receives filtered results related to the search;
- In case of failure, an alert is displayed informing the user of the error;
- If the search is performed with an empty search field, an alert informs the user of the error.

![search](src/assets/images/SearchBar.jpeg)

#### Mobile Version

![mobile1](src/assets/images/mobile1.jpeg)

![mobile2](src/assets/images/mobile2.jpeg)

# Motivation
My motivation was to develop an efficient data table that displays dynamic employee information, allowing for filtered search to enhance the user experience. This not only makes the application more efficient but also offers intuitive interaction and facilitates quick location of relevant information, contributing to a more satisfying user experience.

# Technologies Used
For this project, the following technologies were used:

- React;
- Vite;
- Axios;
- Eslint;
- Styled Components;
- Dayjs;
- Sweet Alerts;
- TypeScript;
- React Router.

# How to Run in Development
To run this project in development, follow the steps below:

- Clone the repository;
- Install the necessary dependencies with the command: npm install;
- To run the project in development, execute the command npm run dev.
  
# How to Get Data from the Json Server API
To access dynamic data, I deployed the API that shares employee information:

- Create a .env file in the root folder of your project;
- Create an environment variable and add the link to the API deployment: VITE_API_URL= (deployment link)
- As in the example, add the following link from the specified location: https://json-api-alpha-dun.vercel.app/
