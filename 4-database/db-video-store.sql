CREATE TABLE `users` (
  `id` INT PRIMARY KEY,
  `name` VARCHAR(50),
  `lastname` VARCHAR(50),
  `email` VARCHAR(100),
  `password` VARCHAR(255)
);

CREATE TABLE `authors` (
  `id` INT PRIMARY KEY,
  `user_id` INT,
  `name` VARCHAR(50),
  `lastname` VARCHAR(50),
  `email` VARCHAR(100)
);

CREATE TABLE `collaborators` (
  `id` INT PRIMARY KEY,
  `user_id` INT,
  `name` VARCHAR(50),
  `lastname` VARCHAR(50),
  `email` VARCHAR(100)
);

CREATE TABLE `videos` (
  `id` INT PRIMARY KEY,
  `title` VARCHAR(255),
  `description` TEXT,
  `duration` INT,
  `creation_date` DATE,
  `publication_date` DATE,
  `author_id` INT
);

CREATE TABLE `comments` (
  `id` INT PRIMARY KEY,
  `text` TEXT,
  `date` DATE,
  `user_id` INT,
  `video_id` INT
);

CREATE TABLE `reviews` (
  `id` INT PRIMARY KEY,
  `rating` INT,
  `text` TEXT,
  `date` DATE,
  `user_id` INT,
  `video_id` INT
);

CREATE TABLE `visualizations` (
  `video_id` INT PRIMARY KEY,
  `count` INT
);

CREATE TABLE `activity` (
  `id` INT PRIMARY KEY,
  `activity_type` ENUM ('comment', 'review') NOT NULL,
  `text` TEXT,
  `date` DATE,
  `user_id` INT,
  `video_id` INT
);

CREATE INDEX `idx_author_id` ON `videos` (`author_id`);

CREATE INDEX `idx_video_id_comments` ON `comments` (`video_id`);

CREATE INDEX `idx_video_id_reviews` ON `reviews` (`video_id`);

ALTER TABLE `authors` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `collaborators` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `videos` ADD FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`video_id`) REFERENCES `videos` (`id`);

ALTER TABLE `reviews` ADD FOREIGN KEY (`video_id`) REFERENCES `videos` (`id`);

ALTER TABLE `visualizations` ADD FOREIGN KEY (`video_id`) REFERENCES `videos` (`id`);

ALTER TABLE `activity` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `activity` ADD FOREIGN KEY (`video_id`) REFERENCES `videos` (`id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

ALTER TABLE `reviews` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
