-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando estructura para tabla contacto_db.mensajes
CREATE TABLE IF NOT EXISTS `mensajes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `asunto` varchar(150) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `mensaje` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `fecha_envio` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- Volcando datos para la tabla contacto_db.mensajes: ~5 rows (aproximadamente)
INSERT INTO `mensajes` (`id`, `nombre`, `email`, `asunto`, `mensaje`, `fecha_envio`) VALUES
	(1, 'Carlos Mex', 'carlos.tec214@gmail.com', 'General Enquiry', 'Nada por el momento jejej', '2026-02-07 23:23:59'),
	(2, 'Alberto Tec', 'prueba@gmail.com', 'Support Request', 'Ayudaaaa', '2026-02-08 00:46:28'),
	(3, 'mex mexito', 'dgddg@gmail.com', 'General Enquiry', 'njiuvbu', '2026-02-08 01:12:07'),
	(4, 'Jesus Baltazar', 'baltazar@gmail.com', 'Support Request', 'wdsdsdsd', '2026-02-09 00:11:20'),
	(5, 'Javier Lozano', 'lozano@gmail.com', 'Support Request', 'Sopirtesxc', '2026-02-09 15:27:57');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
