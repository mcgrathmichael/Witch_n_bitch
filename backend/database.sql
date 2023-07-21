-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: astro_charts
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `horoscopes`
--

DROP TABLE IF EXISTS `horoscopes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horoscopes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sign` varchar(20) NOT NULL,
  `day` varchar(10) NOT NULL,
  `current_date` date NOT NULL,
  `compatibility` varchar(20) NOT NULL,
  `lucky_number` int NOT NULL,
  `lucky_time` time NOT NULL,
  `color` varchar(20) NOT NULL,
  `date_range` varchar(50) NOT NULL,
  `mood` varchar(20) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horoscopes`
--

LOCK TABLES `horoscopes` WRITE;
/*!40000 ALTER TABLE `horoscopes` DISABLE KEYS */;
INSERT INTO `horoscopes` VALUES (1,'aries','today','2023-07-19','Leo',7,'11:00:00','Red','March 21 - April 19','Energetic','Today is a great day for new beginnings. Take charge and pursue your goals with passion.'),(2,'aries','tomorrow','2023-07-20','Sagittarius',9,'10:30:00','Orange','March 21 - April 19','Optimistic','Tomorrow holds exciting opportunities for adventure. Embrace new experiences and explore the unknown.'),(3,'taurus','today','2023-07-19','Virgo',4,'02:30:00','Green','April 20 - May 20','Stable','You might face some challenges today, but your determination will help you overcome them.'),(4,'taurus','tomorrow','2023-07-20','Capricorn',6,'01:45:00','Brown','April 20 - May 20','Focused','Tomorrow calls for a disciplined approach. Stay focused on your goals and trust your instincts.'),(5,'gemini','today','2023-07-19','Libra',9,'06:15:00','Yellow','May 21 - June 20','Curious','Engage in intellectual pursuits and explore new ideas. Your communication skills will shine today.'),(6,'gemini','tomorrow','2023-07-20','Aquarius',5,'04:00:00','Sky Blue','May 21 - June 20','Innovative','Tomorrow sparks creativity and innovation. Embrace your unique perspective and think outside the box.'),(7,'cancer','today','2023-07-19','Scorpio',2,'09:45:00','Silver','June 21 - July 22','Nurturing','Focus on self-care and emotional well-being. Your intuition will guide you in making important decisions.'),(8,'cancer','tomorrow','2023-07-20','Pisces',7,'11:15:00','Lavender','June 21 - July 22','Compassionate','Tomorrow encourages empathy and compassion. Extend your support to those in need and spread positivity.'),(9,'leo','today','2023-07-19','Aries',5,'03:30:00','Gold','July 23 - August 22','Confident','Embrace your natural leadership qualities and shine bright. Your charisma will attract positive opportunities.'),(10,'leo','tomorrow','2023-07-20','Gemini',3,'12:00:00','Yellow','July 23 - August 22','Expressive','Tomorrow enhances your communication skills. Express yourself with clarity and confidence.'),(11,'virgo','today','2023-07-19','Taurus',6,'01:30:00','Navy Blue','August 23 - September 22','Practical','Pay attention to details and focus on organization. Your practical approach will lead to success.'),(12,'virgo','tomorrow','2023-07-20','Cancer',8,'02:45:00','Gray','August 23 - September 22','Analytical','Tomorrow highlights your analytical abilities. Trust your instincts and make well-informed decisions.'),(13,'libra','today','2023-07-19','Gemini',4,'02:00:00','Pastel Pink','September 23 - October 22','Harmonious','Seek balance and harmony in all aspects of life. Focus on nurturing relationships and fostering peace.'),(14,'libra','tomorrow','2023-07-20','Leo',1,'09:30:00','Rose','September 23 - October 22','Creative','Tomorrow ignites your creative spark. Embrace artistic endeavors and express your unique talents.'),(15,'scorpio','today','2023-07-19','Cancer',8,'01:45:00','Maroon','October 23 - November 21','Intense','Tap into your inner strength and embrace your passions. Your determination will lead to remarkable achievements.'),(16,'scorpio','tomorrow','2023-07-20','Pisces',5,'03:15:00','Deep Blue','October 23 - November 21','Mysterious','Tomorrow holds mysterious energies. Trust your instincts and uncover hidden opportunities.'),(17,'sagittarius','today','2023-07-19','Aries',9,'04:15:00','Purple','November 22 - December 21','Adventurous','Embrace your adventurous spirit and seek new experiences. Today is a day for exploration and growth.'),(18,'sagittarius','tomorrow','2023-07-20','Leo',7,'11:45:00','Turquoise','November 22 - December 21','Optimistic','Tomorrow brings optimism and positivity. Trust your instincts and follow your dres with enthusiasm.'),(19,'capricorn','today','2023-07-19','Taurus',3,'12:30:00','Dark Green','December 22 - January 19','bitious','Focus on your long-term goals and take steps towards achieving them. Your determination will lead to success.'),(20,'capricorn','tomorrow','2023-07-20','Virgo',2,'09:00:00','Black','December 22 - January 19','Practical','Tomorrow calls for practicality and organization. Plan your day efficiently and stay focused on your priorities.'),(21,'aquarius','today','2023-07-19','Gemini',10,'04:45:00','Blue','January 20 - February 18','Innovative','Embrace your unique perspective and think outside the box. Your ideas will inspire others.'),(22,'aquarius','tomorrow','2023-07-20','Libra',6,'01:30:00','Silver','January 20 - February 18','Balanced','Tomorrow emphasizes harmony and balance. Seek inner peace and maintain a calm and composed demeanor.'),(23,'pisces','today','2023-07-19','Cancer',12,'07:20:00','Sea Green','February 19 - March 20','Drey','Tap into your intuition and creativity. Trust your instincts and pursue your dres with passion.'),(24,'pisces','tomorrow','2023-07-20','Scorpio',8,'02:00:00','Purple','February 19 - March 20','Intuitive','Tomorrow enhances your intuition and psychic abilities. Trust your inner voice and embrace spiritual insights.'),(25,'aries','today','2023-07-19','Leo',7,'11:00:00','Red','March 21 - April 19','Energetic','Today is a great day for new beginnings. Take charge and pursue your goals with passion.'),(26,'aries','tomorrow','2023-07-20','Sagittarius',9,'10:30:00','Orange','March 21 - April 19','Optimistic','Tomorrow holds exciting opportunities for adventure. Embrace new experiences and explore the unknown.'),(27,'taurus','today','2023-07-19','Virgo',4,'14:30:00','Green','April 20 - May 20','Stable','You might face some challenges today, but your determination will help you overcome them.'),(28,'taurus','tomorrow','2023-07-20','Capricorn',6,'13:45:00','Brown','April 20 - May 20','Focused','Tomorrow calls for a disciplined approach. Stay focused on your goals and trust your instincts.'),(29,'gemini','today','2023-07-19','Libra',9,'18:15:00','Yellow','May 21 - June 20','Curious','Engage in intellectual pursuits and explore new ideas. Your communication skills will shine today.'),(30,'gemini','tomorrow','2023-07-20','Aquarius',5,'16:00:00','Sky Blue','May 21 - June 20','Innovative','Tomorrow sparks creativity and innovation. Embrace your unique perspective and think outside the box.'),(31,'cancer','today','2023-07-19','Scorpio',2,'09:45:00','Silver','June 21 - July 22','Nurturing','Focus on self-care and emotional well-being. Your intuition will guide you in making important decisions.'),(32,'cancer','tomorrow','2023-07-20','Pisces',7,'11:15:00','Lavender','June 21 - July 22','Compassionate','Tomorrow encourages empathy and compassion. Extend your support to those in need and spread positivity.'),(33,'leo','today','2023-07-19','Aries',5,'15:30:00','Gold','July 23 - August 22','Confident','Embrace your natural leadership qualities and shine bright. Your charisma will attract positive opportunities.'),(34,'leo','tomorrow','2023-07-20','Gemini',3,'12:00:00','Yellow','July 23 - August 22','Expressive','Tomorrow enhances your communication skills. Express yourself with clarity and confidence.'),(35,'virgo','today','2023-07-19','Taurus',6,'13:30:00','Navy Blue','August 23 - September 22','Practical','Pay attention to details and focus on organization. Your practical approach will lead to success.'),(36,'virgo','tomorrow','2023-07-20','Cancer',8,'14:45:00','Gray','August 23 - September 22','Analytical','Tomorrow highlights your analytical abilities. Trust your instincts and make well-informed decisions.'),(37,'libra','today','2023-07-19','Gemini',4,'14:00:00','Pastel Pink','September 23 - October 22','Harmonious','Seek balance and harmony in all aspects of life. Focus on nurturing relationships and fostering peace.'),(38,'libra','tomorrow','2023-07-20','Leo',1,'09:30:00','Rose','September 23 - October 22','Creative','Tomorrow ignites your creative spark. Embrace artistic endeavors and express your unique talents.'),(39,'scorpio','today','2023-07-19','Cancer',8,'13:45:00','Maroon','October 23 - November 21','Intense','Tap into your inner strength and embrace your passions. Your determination will lead to remarkable achievements.'),(40,'scorpio','tomorrow','2023-07-20','Pisces',5,'15:15:00','Deep Blue','October 23 - November 21','Mysterious','Tomorrow holds mysterious energies. Trust your instincts and uncover hidden opportunities.'),(41,'sagittarius','today','2023-07-19','Aries',9,'16:15:00','Purple','November 22 - December 21','Adventurous','Embrace your adventurous spirit and seek new experiences. Today is a day for exploration and growth.'),(42,'sagittarius','tomorrow','2023-07-20','Leo',7,'11:45:00','Turquoise','November 22 - December 21','Optimistic','Tomorrow brings optimism and positivity. Trust your instincts and follow your dreams with enthusiasm.'),(43,'capricorn','today','2023-07-19','Taurus',3,'12:30:00','Dark Green','December 22 - January 19','Ambitious','Focus on your long-term goals and take steps towards achieving them. Your determination will lead to success.'),(44,'capricorn','tomorrow','2023-07-20','Virgo',2,'09:00:00','Black','December 22 - January 19','Practical','Tomorrow calls for practicality and organization. Plan your day efficiently and stay focused on your priorities.'),(45,'aquarius','today','2023-07-19','Gemini',10,'16:45:00','Blue','January 20 - February 18','Innovative','Embrace your unique perspective and think outside the box. Your ideas will inspire others.'),(46,'aquarius','tomorrow','2023-07-20','Libra',6,'13:30:00','Silver','January 20 - February 18','Balanced','Tomorrow emphasizes harmony and balance. Seek inner peace and maintain a calm and composed demeanor.'),(47,'pisces','today','2023-07-19','Cancer',12,'19:20:00','Sea Green','February 19 - March 20','Dreamy','Tap into your intuition and creativity. Trust your instincts and pursue your dreams with passion.'),(48,'pisces','tomorrow','2023-07-20','Scorpio',8,'14:00:00','Purple','February 19 - March 20','Intuitive','Tomorrow enhances your intuition and psychic abilities. Trust your inner voice and embrace spiritual insights.');
/*!40000 ALTER TABLE `horoscopes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `hashedPassword` varchar(255) NOT NULL,
  `starsign` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Michael','a@a.com','$argon2id$v=19$m=65536,t=5,p=1$yGpB9PjJpWDmuCWaDpT/9g$6Fyi+8N2hv7Uf6OK3TdEkxeX9iwrasX1wAwK05mbdio',''),(2,'Michael','m@m.com','$argon2id$v=19$m=65536,t=5,p=1$bHhnvvtHhDMNaGGGv7rcQQ$lHd2ylTg5RTyLPcYUg5hhe3NpjMeI9zK0zv9P8+Ax2k',''),(3,'ask','aska@a.com','$argon2id$v=19$m=65536,t=5,p=1$mh3KBENdWuvKVO7D4LqEjA$BaMEVYVLOQA3/cDaLWGekNM2txArWjK+aOCneZJ3I3s',''),(4,'asam','kask@a.com','$argon2id$v=19$m=65536,t=5,p=1$6ocwhc/a9rvnI0jsxQ/Ktw$069BURKKBwS93xOSGNDGYEYQhQwM3AeJs1i54quZ42s',''),(5,'asaka','kaksaksasa@a.com','$argon2id$v=19$m=65536,t=5,p=1$IqiRKXT3HzhIGkRTgBMdLg$XcPawUtkKURnnKQoK8ZTmtVoL1vpDdzCYOmctY99TpA','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-19 16:54:39
