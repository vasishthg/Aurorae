CREATE TABLE `usercourses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(415) DEFAULT NULL,
  `points` int DEFAULT NULL,
  `completed` int DEFAULT NULL,
  `level` int DEFAULT NULL,
  `c1` varchar(45) DEFAULT NULL,
  `c2` varchar(45) DEFAULT NULL,
  `c3` varchar(45) DEFAULT NULL,
  `c4` varchar(45) DEFAULT NULL,
  `c5` varchar(45) DEFAULT NULL,
  `c6` varchar(45) DEFAULT NULL,
  `c7` varchar(45) DEFAULT NULL,
  `c8` varchar(45) DEFAULT NULL,
  `c9` varchar(45) DEFAULT NULL,
  `c10` varchar(45) DEFAULT NULL,
  `datestarted` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
