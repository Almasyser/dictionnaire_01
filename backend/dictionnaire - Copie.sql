-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
-- Host: 127.0.0.1    Database: dictionnaire_csv
-- ------------------------------------------------------
-- Server version	8.0.34
DROP DATABASE IF EXISTS dictionnaire_csv;
CREATE DATABASE IF NOT EXISTS dictionnaire_csv ;
USE dictionnaire_csv ;
--
-- Table structure for table `words`
DROP TABLE IF EXISTS `words`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `words` (
  `idword` int NOT NULL AUTO_INCREMENT,
  `word` varchar(32) DEFAULT NULL,
   PRIMARY KEY (`idword`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
LOAD DATA INFILE '/var/lib/mysql-files/liste_francais.txt'
 INTO TABLE words
 LINES TERMINATED BY '\r\n'
(word);
-- LOAD DATA INFILE 'C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\liste_francais.txt'