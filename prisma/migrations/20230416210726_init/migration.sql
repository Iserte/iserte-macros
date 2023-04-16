-- CreateTable
CREATE TABLE `User` (
    `key` VARCHAR(191) NOT NULL,
    `mac` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `discord` VARCHAR(191) NULL,
    `whatsapp` VARCHAR(191) NULL,
    `expiresIn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
