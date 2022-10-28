CREATE TABLE `blog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(145) NOT NULL,
  `title` varchar(1345) NOT NULL,
  `date` date NOT NULL,
  `desc` longtext NOT NULL,
  `thumb` varchar(10000) NOT NULL,
  `art` varchar(45) DEFAULT NULL,
  `music` varchar(45) DEFAULT NULL,
  `abstract` varchar(45) DEFAULT NULL,
  `fantasy` varchar(45) DEFAULT NULL,
  `NFT` varchar(45) DEFAULT NULL,
  `Tech` varchar(45) DEFAULT NULL,
  `Anime` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
