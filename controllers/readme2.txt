SET sql_mode = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';

CREATE TABLE IF NOT EXISTS `proyectodaddonas`.`usuarios` (
  `id` INT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(32) NOT NULL,
  `estado` TINYINT NOT NULL DEFAULT 1,
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));
  
alter table usuarios drop column createdAt;
alter table usuarios drop column updatedAt;
alter table usuarios add createdAt timestamp after estado;
alter table usuarios add updatedAt timestamp after createdAt;

show databases;

use proyectodaddonas;

select  * from usuarios;




***************************************
ESTE  SI SIRVE

CREATE TABLE `proyectodaddonas`.`usuarios`
(
    id         INT PRIMARY KEY auto_increment ,
	`nombre` VARCHAR(255) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	`password` VARCHAR(32) NOT NULL,
	`estado` TINYINT NOT NULL DEFAULT 1,
    createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE `proyectodaddonas`.`usuarios`;

show databases;

use proyectodaddonas;

select  * from usuarios;