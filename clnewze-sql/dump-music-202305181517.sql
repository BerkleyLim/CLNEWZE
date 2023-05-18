-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: music
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `information`
--

DROP TABLE IF EXISTS `information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `information` (
  `ino` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `title` text,
  `viewNumber` int DEFAULT NULL,
  `artist` text,
  `img` text,
  `genre` text,
  `releaseDate` char(4) DEFAULT NULL,
  `albumName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `musicLink` blob,
  `contents` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `uploadDate` datetime DEFAULT NULL,
  PRIMARY KEY (`ino`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `information`
--

LOCK TABLES `information` WRITE;
/*!40000 ALTER TABLE `information` DISABLE KEYS */;
INSERT INTO `information` VALUES (1,'berkley','Yellow moon',0,'Yiruma','/image/file/information/sample-yiruma-chaconne.png','newage','1998','Yellow moon','','이곡은 클래식을 기반으로 하여 작성하였다.','2021-06-17 20:53:37'),(2,'berkley','legend',20,'Yuriko Nakamura','/image/file/information/sample-yiruma-chaconne.png','newage','1998','legend','','이곡은 클래식을 기반으로 하여 작성하였다.','2021-07-13 12:07:51');
/*!40000 ALTER TABLE `information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `practiceroom`
--

DROP TABLE IF EXISTS `practiceroom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `practiceroom` (
  `pno` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `title` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `place` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `contents` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `uploadDate` datetime DEFAULT NULL,
  `price` int DEFAULT NULL,
  `categories` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`pno`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `practiceroom`
--

LOCK TABLES `practiceroom` WRITE;
/*!40000 ALTER TABLE `practiceroom` DISABLE KEYS */;
INSERT INTO `practiceroom` VALUES (1,'sanbon','산본에서 다양한 그랜드 피아노를 지원합니다','/image/file/practiceroom/c8ce560f-fc7d-4006-aed8-eaa8668396a7.jpg.1440x1440_q85_detail_upscale.jpg','sanbon','경기도 군포시 산본동','지금 현재 그랜드 피아노 연습실, 업라이트 피아노 연습실 뿐만 아니라 다양하게 있습니다.','2023-05-18 14:32:31',5000,'piano');
/*!40000 ALTER TABLE `practiceroom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sheetmusic`
--

DROP TABLE IF EXISTS `sheetmusic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sheetmusic` (
  `ino` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `viewNumber` int DEFAULT NULL,
  `artist` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `genre` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `releaseDate` char(4) DEFAULT NULL,
  `albumName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `musicLink` text,
  `contents` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `uploadDate` datetime DEFAULT NULL,
  `sheetFile` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`ino`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sheetmusic`
--

LOCK TABLES `sheetmusic` WRITE;
/*!40000 ALTER TABLE `sheetmusic` DISABLE KEYS */;
INSERT INTO `sheetmusic` VALUES (1,'berkley','The lark',0,'Glinka','/image/file/sheetmusic/1684322911420.jpg','classic','1894','1','','이 곡은 러시아의 신 낭만 주의에서 만들어진 곡 종달새처럼 와르르','2023-05-17 18:24:51','/image/file/sheetmusic/Glinka(글린카)-Balakirev(발라키레프) - The Lark (종달새) (1864).pdf');
/*!40000 ALTER TABLE `sheetmusic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_user`
--

DROP TABLE IF EXISTS `t_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_user` (
  `uno` int NOT NULL AUTO_INCREMENT,
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `role_user` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`uno`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_user`
--

LOCK TABLES `t_user` WRITE;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;
INSERT INTO `t_user` VALUES (1,'admin','AC9689E2272427085E35B9D3E3E8BED88CB3434828B43B86FC0596CAD4C6E270','admin','ADMIN');
/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher` (
  `tno` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `img` text,
  `name` varchar(45) DEFAULT NULL,
  `major` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `place` varchar(45) DEFAULT NULL,
  `contents` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `uploadDate` datetime DEFAULT NULL,
  PRIMARY KEY (`tno`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (1,'루나별','클래식, 뉴에이지, ost 등 책임지는 유쾌한 루나별','/image/file/teacher/별.png','박해영','piano','서울특별시 관악구 신림동','안녕하세요. 한국 예술 종합학교에 졸업한 클래식 피아노 박해영입니다.','2021-08-16 10:31:06'),(2,'성진좌','쇼팽 콩쿠루 1등의 비결, 피아노의 대해 알려드립니다.','/image/file/teacher/sung_jin_jo.png','조성진','piano','서울특별시 강남구 역상동','저는 쇼팽 콩쿠르 1등이고, 차후 쇼팽 콩쿠르 대회에 입상을 위해 힘쓰고 있습니다.','2023-05-17 21:58:43'),(3,'최강바이올린','바이올린의 대해서 알려드립니다.','/image/file/teacher/vanessa_mayjpg.jpg','바네사메이','string','서울특별시 광진구 성수동','저는 contradanza를 통해 널리 유명해졌고 현재는 바이올린 강사를 맡고 있습니다.','2023-05-17 22:00:05');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'music'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-18 15:17:27
