# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

<h3> Implementação do projeto de interface: </h3>
https://www.figma.com/file/H1LvDAe39TLO9qtRYDHXs0/BICOS---SERVI%C3%87OS?node-id=0%3A1&t=P1ssASyalRN3n5AK-1

<hr />

<h3>Relacionamento da aplicação com os requisitos</h3>
Relacionando o desenvolvimento feito aos requisitos do sistema, até o momento contempla-se os requisitos:
<pre>
| RF-001 | A aplicação deverá possuir uma apresentação breve do aplicativo | <br />
| RF-002 | A aplicação deverá permitir o cadastro de dois tipos de usuários, o trabalhador em "Trabalhar" e o contratante em "Contratar" | <br />
| RF-003 | A aplicação deverá permitir a edição do perfil desses usuários | <br />
| RF-004 | A aplicação terá um perfil de usuário para o contratado com suas qualificações e preferências | <br />
| RF-005 | A aplicação deverá permitir o contratante criar oportunidades de serviço | <br />
| RF-006 | A aplicação deverá permitir o contratante selecionar a categoria do serviço em questão. | <br />
| RF-007 | A aplicação deverá exibir as especificações de cada serviço aos contratados como VALOR, LOCAL, PERÍODO e FUNÇÃO | <br />
| RF-008 | A aplicação deve permitir que o contratado canditate-se as oportunidades de serviço | <br />
| RF-009 | A aplicação deverá possuir a funcionalidade de busca e filtragem das oportunidades de serviço | <br />
| RF-010 | A aplicação deverá sugerir serviços aos contratados baseando-se em seus dados pessoais | <br />
| RF-011 | A aplicação deverá permitir que os usuários tenham as infomações de contato de ambos | <br />
| RF-012 | A aplicação deverá permitir que os usuários façam o login e loggout | <br />
| RF-013 | A aplicação deverá permitir que o contratante avalie o contratado após o serviço |
</pre>
Esses requisitos foram alcançados pelo desenvolvimento da tela de login / registro da aplicação e a tela inicial.
Temos lá a descrição breve e também a distinção do usuário contratante e contratado. 

![image](https://user-images.githubusercontent.com/68014636/229312817-8512858b-ab95-4803-917c-aa4f3987fc65.png)

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/perfil1.png)

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/servi%C3%A7o2.png)

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/explorar%20servi%C3%A7os3.png)

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/login4.png)

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/home5.png)

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/registro6.png)

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/admser%204.png)

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/ediper1.png)

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/ediper6.png)

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/ediser3.png)

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/homep2.png)

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/per5.png)
<hr />

<h3>Modelo Físico do Projeto BD e Scripts SQL</h3>

O projeto foi desenvolvido utilizando o JSON SERVER, com isso, o banco de dados não é utilizado no sistema, mas foi concebido para que 
fossem avaliadas as habilidades de manipulação SQL, conforme combinado com o professor.

**COMANDOS SQL PARA CRIAÇÃO DAS TABELAS DO BANCO DE DADOS:**

<code>
  
 CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `senha` varchar(20) DEFAULT NULL,
  `telefone` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UN` (`email`),
  UNIQUE KEY `telefone_UN` (`telefone`)
);


CREATE TABLE `trabalhadores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `habilidades` text NOT NULL,
  `experiencia` int DEFAULT NULL,
  `localizacao` varchar(45) DEFAULT NULL,
  `disponibilidade` varchar(45) NOT NULL,
  `taxa_horaria` decimal(5,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId_UN` (`user_id`),
  KEY `FK_userId` (`user_id`),
  CONSTRAINT `FK_userId` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE `contratantes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `descricao` text NOT NULL,
  `prazo` timestamp NULL DEFAULT NULL,
  `localizacao` varchar(45) DEFAULT NULL,
  `disponibilidade` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userId_UN` (`user_id`),
  KEY `FK_userId1` (`user_id`),
  CONSTRAINT `FK_userId1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE `servicos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` text NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `preco` decimal(5,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);


CREATE TABLE `contratacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `servico_id` int NOT NULL,
  `contratante_id` int NOT NULL,
  `trabalhador_id` int NOT NULL,
  `data` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `servico_UN` (`servico_id`),
  UNIQUE KEY `contratante_UN` (`contratante_id`),
  UNIQUE KEY `trabalhador_UN` (`trabalhador_id`),
  KEY `FK_servicoId` (`servico_id`),
  KEY `FK_contratanteId` (`contratante_id`),
  KEY `FK_trabalhadorId` (`trabalhador_id`),
  CONSTRAINT `FK_contratanteId` FOREIGN KEY (`contratante_id`) REFERENCES `contratantes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_servicoId` FOREIGN KEY (`servico_id`) REFERENCES `servicos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_trabalhadorId` FOREIGN KEY (`trabalhador_id`) REFERENCES `trabalhadores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE `avaliacoes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `servico_id` int NOT NULL,
  `contratacao_id` int NOT NULL,
  `nota` int NOT NULL,
  `comentario` text,
  `data` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `servico_UN` (`servico_id`),
  UNIQUE KEY `contratacao_UN` (`contratacao_id`),
  KEY `FK_servicoI1d` (`servico_id`),
  KEY `FK_contratacaoId` (`contratacao_id`),
  CONSTRAINT `FK_contratacaoId` FOREIGN KEY (`contratacao_id`) REFERENCES `contratacao` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_servicoId1` FOREIGN KEY (`servico_id`) REFERENCES `servicos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
  
</code>

** Também disponibilizado em arquivo.sql **
https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/blob/main/src/bd/banco.sql

**COMANDOS SQL PARA MANIPULAÇÃO DE DADOS (DML)**
  
<code>INSERT INTO usuarios (nome, email, senha, telefone) VALUES ('nome', 'email@email.com', 'senha123', '31999999999');</code>
  
<code>SELECT * FROM usuarios WHERE email = 'email@email.com' AND senha = 'senha123';</code>

<code>UPDATE usuarios
SET telefone = '31999999999'
WHERE id = 1;</code>

<code>DELETE FROM usuarios WHERE id = 1;</code>
  
<code>INSERT INTO trabalhadores (user_id, habilidades, experiencia, localizacao, disponibilidade, taxa_horaria) VALUES (1, 'Obras', '10 anos', 'Belo Horizonte', '06:00 - 17:00', 50);</code>

<code>SELECT * FROM trabalhadores WHERE user_id = 1;</code>

<code>UPDATE trabalhadores
SET localizacao = 'Belo Horizonte'
WHERE user_id = 1;</code>

<code>DELETE FROM trabalhadores WHERE user_id = 1;</code>
  
<code>INSERT INTO servicos (descricao, categoria, preco) VALUES ('descricao', 'categoria', 10);</code>

<code>SELECT * FROM servicos WHERE categoria = 'categoria';</code>

<code>UPDATE servicos
SET descricao = 'Pedreiro Experiente'
WHERE id = 1;</code>

<code>DELETE FROM servicos WHERE id = 4;</code>

<code>INSERT
	INTO
	contratantes (user_id,
	descricao,
	prazo,
	localizacao,
	disponibilidade)
VALUES (1,
'Desejo realizar obras na minha residência',
'2023-05-07 21:11:35',
'Belo Horizonte',
'06:00 - 17:00');</code>

<code>SELECT * FROM contratantes WHERE user_id = 4;</code>

<code>UPDATE contratantes
SET localizacao = 'Belo Horizonte'
WHERE user_id = 4;</code>

<code>DELETE FROM contratantes WHERE user_id = 4;</code>

<code>INSERT INTO contratacao (servico_id, contratante_id, trabalhador_id, `data`) VALUES (1, 4, 1,'2023-05-07 21:11:35');</code>

<code>SELECT * FROM contratacao WHERE trabalhador_id = 1;</code>

<code>UPDATE contratacao
SET `data` = '2023-05-07 21:11:35'
WHERE servico_id = 1;</code>

<code>DELETE FROM contratacao WHERE servico_id = 1;</code>

<code>INSERT INTO avaliacoes (servico_id, contratacao_id, nota, comentario, `data`) VALUES (1, 4, 5, 'Excelente!', '2023-05-07 21:11:35');</code>

<code>SELECT * FROM avaliacoes WHERE servico_id = 1;</code>

<code>UPDATE avaliacoes
SET comentario = 'Muito bom!'
WHERE servico_id = 1;</code>

<code>DELETE FROM avaliacoes WHERE servico_id = 1;</code>

** Disponibilizado também em arquivo:**
https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/blob/main/src/bd/CRUDs.sql

<h3>Instruções de acesso</h3>

Para acessar a aplicação que não está ainda publicada, basta:
<b>
  1) Baixar / Clonar o código do repositório no VSCODE <br />
  2) Acessar o terminal integrado e executar <code>cd pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos</code>
  3) Depois, rode o comando <code>npm install</code> e aguarda finalizar
  4) Por fim, execute <code>npm start</code>
  5) A aplicação já estará executando, basta instalar o EXPO em seu celular e apontar para o QRCODE
  6) Para a execução do JSON SERVER para autenticar-se, será necessário executá-lo em outro terminal usando:
      <code>npx json-server --watch db.json</code>   
  7) Caso tenha problemas com dispositivos físicos, tente usar o Android Studio.
</b>
<hr />
<h3> Participação dos membros do grupo </h3>

<h5> Print atual do quadro de gestão do projeto (Click Up): </h5>

Os artefatos foram dividos entre os membros do grupo e todos estão participando ativamente. <br />
  Entre as terefas tivemos: <br />
  Desenvolvimento de software, <br />
  Documentação, <br />
  Definição da interface, <br />
  Projeto da base de dados <br />
  
 <h5>Algumas divididas, outras desenvolvidas em conjunto, conforme commits no Github e ferramenta de gerenciamento abaixo:</h6>

![image](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t6-bicos-prestacao-de-servicos/main/docs/img/clickUp%20final.png)

