CREATE DATABASE IF NOT EXISTS `gorras`;
USE `gorras`;

CREATE TABLE `users` (
   `id` INT AUTO_INCREMENT,
   `created_at` timestamp NULL DEFAULT NULL,
   `updated_at` timestamp NULL DEFAULT NULL,
   `firstName` VARCHAR(50) NOT NULL,
   `lastName` VARCHAR(50) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `category` INT NOT NULL,
   `avatar` VARBINARY(800) NOT NULL,
   `id_rol` INT NOT NULL,
   `softDelete` datetime DEFAULT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT AUTO_INCREMENT,
   `created_at` timestamp NULL DEFAULT NULL,
   `updated_at` timestamp NULL DEFAULT NULL,
   `name` VARCHAR(255) NOT NULL,
   `price` INT NOT NULL,
   `description` TEXT NOT NULL,
   `image` VARBINARY(800) NOT NULL,
   `id_category` INT NOT NULL,
   `id_colour` INT NOT NULL,
   `softDelete` datetime DEFAULT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT AUTO_INCREMENT,
   `created_at` timestamp NULL DEFAULT NULL,
   `updated_at` timestamp NULL DEFAULT NULL,
   `category` VARCHAR(50) NOT NULL,
   `softDelete` datetime DEFAULT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `colours` (
   `id` INT AUTO_INCREMENT,
   `created_at` timestamp NULL DEFAULT NULL,
   `updated_at` timestamp NULL DEFAULT NULL,
   `softDelete` datetime DEFAULT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
   `id` INT AUTO_INCREMENT,
   `created_at` timestamp NULL DEFAULT NU
   `updated_at` timestamp NULL DEFAULT NULL,
   `rol` VARCHAR(50) NOT NULL,
   `softDelete` datetime DEFAULT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_8ee5a6d9-0098-4918-b7ff-699b1c6461d9` FOREIGN KEY (`id_rol`) REFERENCES `roles`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_e6027977-3204-4a7b-bf6d-f9846ca00c05` FOREIGN KEY (`id_category`) REFERENCES `categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_208cf461-6c21-455f-a62f-d203c4a19109` FOREIGN KEY (`id_co