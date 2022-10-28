CREATE TABLE `following` (
  `id` int NOT NULL AUTO_INCREMENT,
  `follower` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  `target` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
