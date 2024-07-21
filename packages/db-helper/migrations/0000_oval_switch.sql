CREATE TABLE `CardToUser` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`cardId` bigint,
	`userId` bigint,
	CONSTRAINT `CardToUser_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `Card` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`value` int NOT NULL,
	`shiny` boolean,
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `Card_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `User` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`userHash` varchar(256),
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `User_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `CardToUser` ADD CONSTRAINT `CardToUser_cardId_Card_id_fk` FOREIGN KEY (`cardId`) REFERENCES `Card`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `CardToUser` ADD CONSTRAINT `CardToUser_userId_User_id_fk` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE cascade ON UPDATE no action;