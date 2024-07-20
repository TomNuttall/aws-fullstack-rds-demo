ALTER TABLE `Card` ADD `updatedAt` timestamp ON UPDATE CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `User` ADD `updatedAt` timestamp ON UPDATE CURRENT_TIMESTAMP;