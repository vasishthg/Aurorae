CREATE TABLE `collections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(45) DEFAULT NULL,
  `title` varchar(145) DEFAULT NULL,
  `desc` longtext,
  `img1` varchar(1015) DEFAULT NULL,
  `img2` varchar(1015) DEFAULT NULL,
  `img3` varchar(1015) DEFAULT NULL,
  `img4` varchar(1015) DEFAULT NULL,
  `img5` varchar(1015) DEFAULT NULL,
  `thumb` varchar(1015) DEFAULT NULL,
  `cost` int DEFAULT NULL,
  `appreciated` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
