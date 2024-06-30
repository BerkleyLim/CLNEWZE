-- MySQL dump 10.13  Distrib 8.3.0, for macos14.2 (arm64)
--
-- Host: 127.0.0.1    Database: music
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `authority`
--

DROP TABLE IF EXISTS `authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authority` (
  `authority_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '권한 정보',
  PRIMARY KEY (`authority_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authority`
--

LOCK TABLES `authority` WRITE;
/*!40000 ALTER TABLE `authority` DISABLE KEYS */;
INSERT INTO `authority` VALUES ('ROLE_ADMIN'),('ROLE_USER');
/*!40000 ALTER TABLE `authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `bno` int NOT NULL AUTO_INCREMENT COMMENT '블로그 인덱스 번호',
  `title` varchar(100) DEFAULT NULL COMMENT '블로그 제목',
  `contents` text COMMENT '블로그 내용',
  `viewNumber` int DEFAULT '0' COMMENT '블로그 조회수',
  `tag` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '태그 내용 작성 (구분자 : " ")',
  PRIMARY KEY (`bno`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (1,'사랑하는 사람에게 들려주는 이야기','내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. ',0,'태그1 태그2 태그3 태그4 태그5'),(2,'사랑하는 사람에게 들려주는 이야기','내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. ',0,'태그1 태그2 태그3 태그4 태그5'),(3,'사랑하는 사람에게 들려주는 이야기','내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. ',0,'태그1 태그2 태그3 태그4 태그5'),(4,'사랑하는 사람에게 들려주는 이야기','내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. ',0,'태그1 태그2 태그3 태그4 태그5'),(5,'사랑하는 사람에게 들려주는 이야기','내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. ',0,'태그1 태그2 태그3 태그4 태그5'),(6,'사랑하는 사람에게 들려주는 이야기','내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. ',0,'태그1 태그2 태그3 태그4 태그5'),(7,'사랑하는 사람에게 들려주는 이야기','내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. ',0,'태그1 태그2 태그3 태그4 태그5'),(8,'사랑하는 사람에게 들려주는 이야기','내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. ',0,'태그1 태그2 태그3 태그4 태그5'),(9,'사랑하는 사람에게 들려주는 이야기','내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. ',0,'태그1 태그2 태그3 태그4 태그5'),(10,'사랑하는 사람에게 들려주는 이야기','내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. ',0,'태그1 태그2 태그3 태그4 태그5'),(11,'사랑하는 사람에게 들려주는 이야기','내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. ',0,'태그1 태그2 태그3 태그4 태그5'),(12,'사랑하는 사람에게 들려주는 이야기','내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. 내용 : 저는 사랑하는 사람에게 달콤한 사랑을 주기 위해 시를 쓰는 노래를 들려주고 싶습니다. ',0,'태그1 태그2 태그3 태그4 태그5');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

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
-- Table structure for table `master_header`
--

DROP TABLE IF EXISTS `master_header`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `master_header` (
  `hdno` int NOT NULL AUTO_INCREMENT COMMENT '헤더메뉴인덱스번호',
  `orderby` int DEFAULT NULL COMMENT '오더바이',
  `menu_name` varchar(100) DEFAULT NULL COMMENT '메뉴명',
  `link` varchar(255) DEFAULT NULL COMMENT '경로',
  PRIMARY KEY (`hdno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master_header`
--

LOCK TABLES `master_header` WRITE;
/*!40000 ALTER TABLE `master_header` DISABLE KEYS */;
/*!40000 ALTER TABLE `master_header` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `master_menu_room`
--

DROP TABLE IF EXISTS `master_menu_room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `master_menu_room` (
  `rtno` int NOT NULL AUTO_INCREMENT COMMENT '연습실찾기 인덱스 번호',
  `name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '연습실 찾기 메뉴 이름',
  `orderby` int DEFAULT NULL COMMENT '카테고리 배치 순서',
  `category` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '카테고리 키워드 등록',
  PRIMARY KEY (`rtno`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master_menu_room`
--

LOCK TABLES `master_menu_room` WRITE;
/*!40000 ALTER TABLE `master_menu_room` DISABLE KEYS */;
INSERT INTO `master_menu_room` VALUES (4,'서울',2,'seoul'),(5,'부산',3,'busan'),(6,'대구',4,'daegu'),(7,'인천',5,'incheon'),(8,'광주',6,'gangju'),(9,'대전',7,'daejeon'),(10,'울산',8,'ulsan'),(11,'경기도',9,'gyunggi'),(12,'강원도',10,'gangwon'),(13,'충청북도',11,'chungcung'),(14,'경상도',12,'kungsang'),(15,'전라도',13,'junra'),(16,'제주도',14,'jeju'),(17,'전체',14,'');
/*!40000 ALTER TABLE `master_menu_room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `master_menu_sheetmusic`
--

DROP TABLE IF EXISTS `master_menu_sheetmusic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `master_menu_sheetmusic` (
  `smtno` int NOT NULL AUTO_INCREMENT COMMENT '악보 인덱스 번호',
  `name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '악보 메뉴 이름',
  `orderby` int DEFAULT NULL COMMENT '카테고리 배치 순서',
  `category` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '카테고리 키워드 등록',
  PRIMARY KEY (`smtno`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master_menu_sheetmusic`
--

LOCK TABLES `master_menu_sheetmusic` WRITE;
/*!40000 ALTER TABLE `master_menu_sheetmusic` DISABLE KEYS */;
INSERT INTO `master_menu_sheetmusic` VALUES (2,'전체',1,''),(3,'클래식',2,'classic'),(4,'뉴에이지',3,'newage'),(5,'재즈',4,'jazz'),(6,'가요',5,'kpop'),(7,'팝',6,'pop'),(8,'OST',7,'ost'),(9,'기타장르',8,'etc'),(13,'ㅇㄹ',9,'ㄴㅇㄹ');
/*!40000 ALTER TABLE `master_menu_sheetmusic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `master_menu_teacher`
--

DROP TABLE IF EXISTS `master_menu_teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `master_menu_teacher` (
  `mtno` int NOT NULL AUTO_INCREMENT COMMENT '레스너찾기 인덱스 번호',
  `name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '레스너 찾기 메뉴 이름',
  `order_by_no` int DEFAULT NULL COMMENT '카테고리 배치 순서',
  `category` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '카테고리 키워드 등록',
  PRIMARY KEY (`mtno`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master_menu_teacher`
--

LOCK TABLES `master_menu_teacher` WRITE;
/*!40000 ALTER TABLE `master_menu_teacher` DISABLE KEYS */;
INSERT INTO `master_menu_teacher` VALUES (1,'전체',1,NULL),(2,'피아노',2,'piano'),(3,'현악기',3,'string'),(4,'관악기',4,'wind'),(5,'기타',5,'guitar'),(6,'국악',6,'gugak'),(7,'성악',7,'sunack'),(8,'다른악기',8,'etc'),(9,'우클렐레',9,'uclia'),(10,'앙상블',11,'asangble'),(11,'타악기',10,'tags1'),(20,'바이올린',12,'violin');
/*!40000 ALTER TABLE `master_menu_teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_info`
--

DROP TABLE IF EXISTS `profile_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_info` (
  `pno` int NOT NULL AUTO_INCREMENT COMMENT '프로필 정보 인덱스',
  `uno` int NOT NULL COMMENT '회원 인덱스 번호',
  `introduction` varchar(255) DEFAULT NULL COMMENT '소개',
  `specialization` varchar(255) DEFAULT NULL COMMENT '전문분야',
  `experience_detail` int DEFAULT NULL COMMENT '경력사항상세',
  `education` varchar(255) DEFAULT NULL COMMENT '학력(학사,전문학사 등)',
  `major` varchar(255) DEFAULT NULL COMMENT '전공',
  PRIMARY KEY (`pno`),
  KEY `profile_info_t_user_uno_fk` (`uno`),
  CONSTRAINT `profile_info_t_user_uno_fk` FOREIGN KEY (`uno`) REFERENCES `t_user` (`uno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='프로필 정보 (career)';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_info`
--

LOCK TABLES `profile_info` WRITE;
/*!40000 ALTER TABLE `profile_info` DISABLE KEYS */;
/*!40000 ALTER TABLE `profile_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room` (
  `rno` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `place` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `contents` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `upLoad_date` datetime DEFAULT NULL,
  `price` int DEFAULT NULL,
  `categories` varchar(100) DEFAULT NULL,
  `uno` int DEFAULT NULL,
  PRIMARY KEY (`rno`),
  KEY `practiceroom_FK` (`uno`),
  CONSTRAINT `practiceroom_FK` FOREIGN KEY (`uno`) REFERENCES `t_user` (`uno`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES (1,'산본에서 다양한 그랜드 피아노를 지원합니다','/image/file/practiceroom/c8ce560f-fc7d-4006-aed8-eaa8668396a7.jpg.1440x1440_q85_detail_upscale.jpg','sanbon','경기도 군포시 산본동','지금 현재 그랜드 피아노 연습실, 업라이트 피아노 연습실 뿐만 아니라 다양하게 있습니다.','2023-05-18 14:32:31',5000,'piano',2);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sheet`
--

DROP TABLE IF EXISTS `sheet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sheet` (
  `sno` int NOT NULL AUTO_INCREMENT COMMENT '악보 리스트 인덱스',
  `title` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '악보 제목',
  `view_number` int DEFAULT '0' COMMENT '조회수',
  `artist` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '작곡가/아티스트명',
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '미리보기 이미지 경로',
  `genre` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '장르 키워드',
  `release_date` char(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL COMMENT '발매년도',
  `album_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '앨범명',
  `music_link` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '음악 링크',
  `contents` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci COMMENT '내용',
  `upload_date` datetime DEFAULT (now()) COMMENT '업로드 날짜',
  `sheet_file` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '악보 파일',
  `uno` int DEFAULT NULL COMMENT '회원번호(외래키)',
  PRIMARY KEY (`sno`),
  KEY `sheetmusic_FK` (`uno`),
  CONSTRAINT `sheetmusic_FK` FOREIGN KEY (`uno`) REFERENCES `t_user` (`uno`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sheet`
--

LOCK TABLES `sheet` WRITE;
/*!40000 ALTER TABLE `sheet` DISABLE KEYS */;
INSERT INTO `sheet` VALUES (1,'The lark',0,'Glinka','/image/file/sheet/1684322911420.jpg','classic','1894','1','','이 곡은 러시아의 신 낭만 주의에서 만들어진 곡 종달새처럼 와르르','2023-05-17 18:24:51','/image/file/sheetmusic/Glinka(글린카)-Balakirev(발라키레프) - The Lark (종달새) (1864).pdf',2);
/*!40000 ALTER TABLE `sheet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_user`
--

DROP TABLE IF EXISTS `t_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_user` (
  `uno` int NOT NULL AUTO_INCREMENT COMMENT '유저인덱스',
  `id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '아이디',
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '패스워드',
  `user_name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL COMMENT '회원명',
  `cre_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '회원가입날짜',
  `login_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '최근로그인날짜',
  `nick_name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL COMMENT '닉네임',
  `birthday` date DEFAULT NULL COMMENT '생년월일',
  `activated` tinyint NOT NULL DEFAULT '1' COMMENT '활동중인지 확인',
  PRIMARY KEY (`uno`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_user`
--

LOCK TABLES `t_user` WRITE;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;
INSERT INTO `t_user` VALUES (1,'admin','$2a$10$5wNYWG1HyHJoXX0FbxlBPOW9SN5NXUx5RtqmbIAuxSlYNAzvJV9Gu','admin','2023-08-15 23:17:16','2023-08-15 23:17:41','admin','1999-11-11',1),(2,'test1','$2a$10$Lrwj5cH1fTOvRN62Yew97OnGQLdXmVSA0Eps1ydLdQBa6xZqj/qqa','test1','2023-12-16 23:27:41','2023-12-16 23:27:41','test1','1999-11-11',1),(3,'test2','$2a$10$2oYuQry/dOqGxDShyfgMG.sJJkoCnJGfX6h/l8MdXKgoAb69X9x0G','test2','2023-12-16 23:27:51','2023-12-16 23:27:51','test2','1999-11-11',1),(4,'test3','1234','test3','2023-12-16 23:28:02','2023-12-16 23:28:02','test3','1999-11-11',1);
/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_user_subscript`
--

DROP TABLE IF EXISTS `t_user_subscript`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_user_subscript` (
  `usno` int NOT NULL AUTO_INCREMENT COMMENT '구독정보 인덱스',
  `uno` int DEFAULT NULL COMMENT '사용자 인덱스',
  `sno` int DEFAULT NULL COMMENT '타겟 구독자 인덱스',
  `crt_time` datetime DEFAULT NULL COMMENT '첫 구독 날짜',
  `sub_classify` varchar(100) DEFAULT NULL COMMENT '타겟 구독 등급',
  PRIMARY KEY (`usno`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_user_subscript`
--

LOCK TABLES `t_user_subscript` WRITE;
/*!40000 ALTER TABLE `t_user_subscript` DISABLE KEYS */;
INSERT INTO `t_user_subscript` VALUES (1,2,3,'2023-12-17 00:05:17','junior'),(2,2,4,'2023-12-17 00:05:20','junior'),(3,3,2,'2023-12-17 00:05:26','junior'),(4,3,4,'2023-12-17 01:01:32','junior');
/*!40000 ALTER TABLE `t_user_subscript` ENABLE KEYS */;
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
  `upload_date` datetime DEFAULT NULL,
  `uno` int DEFAULT NULL,
  PRIMARY KEY (`tno`),
  KEY `teacher_FK` (`uno`),
  CONSTRAINT `teacher_FK` FOREIGN KEY (`uno`) REFERENCES `t_user` (`uno`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (1,'루나별','클래식, 뉴에이지, ost 등 책임지는 유쾌한 루나별','/image/file/teacher/별.png','박해영','piano','서울특별시 관악구 신림동','안녕하세요. 한국 예술 종합학교에 졸업한 클래식 피아노 박해영입니다.','2021-08-16 10:31:06',2),(2,'성진좌','쇼팽 콩쿠루 1등의 비결, 피아노의 대해 알려드립니다.','/image/file/teacher/sung_jin_jo.png','조성진','piano','서울특별시 강남구 역상동','저는 쇼팽 콩쿠르 1등이고, 차후 쇼팽 콩쿠르 대회에 입상을 위해 힘쓰고 있습니다.','2023-05-17 21:58:43',3),(3,'최강바이올린','바이올린의 대해서 알려드립니다.','/image/file/teacher/vanessa_mayjpg.jpg','바네사메이','string','서울특별시 광진구 성수동','저는 contradanza를 통해 널리 유명해졌고 현재는 바이올린 강사를 맡고 있습니다.','2023-05-17 22:00:05',4);
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_authority`
--

DROP TABLE IF EXISTS `user_authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_authority` (
  `uno` int NOT NULL COMMENT '회원 인덱스 번호',
  `authority_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '회원 접근 권한 부여',
  PRIMARY KEY (`uno`,`authority_name`),
  CONSTRAINT `user_authority_FK` FOREIGN KEY (`uno`) REFERENCES `t_user` (`uno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_authority`
--

LOCK TABLES `user_authority` WRITE;
/*!40000 ALTER TABLE `user_authority` DISABLE KEYS */;
INSERT INTO `user_authority` VALUES (1,'ROLE_ADMIN'),(1,'ROLE_USER'),(2,'ROLE_USER'),(3,'ROLE_USER'),(4,'ROLE_USER');
/*!40000 ALTER TABLE `user_authority` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-29  0:20:18
