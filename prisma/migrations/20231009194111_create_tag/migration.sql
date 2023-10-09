/*
  Warnings:

  - You are about to alter the column `created_at` on the `post` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `updated_at` on the `post` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `pulblished_at` on the `post` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `created_at` on the `post_comment` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `pulblished_at` on the `post_comment` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `registered` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.
  - You are about to alter the column `lastLogin` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(0)` to `Timestamp`.

*/
-- AlterTable
ALTER TABLE `post` MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `pulblished_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `post_comment` MODIFY `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `pulblished_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `user` MODIFY `registered` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `lastLogin` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `tag` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `metaTile` VARCHAR(100) NOT NULL,
    `slug` VARCHAR(100) NOT NULL,
    `content` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post_category` ADD CONSTRAINT `post_category_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `post_category` ADD CONSTRAINT `post_category_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
