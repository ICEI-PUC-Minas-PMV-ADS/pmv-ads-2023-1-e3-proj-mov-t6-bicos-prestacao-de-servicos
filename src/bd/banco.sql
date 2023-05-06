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