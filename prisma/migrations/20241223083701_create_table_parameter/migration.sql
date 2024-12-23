-- CreateTable
CREATE TABLE `parameters` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `unit` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
