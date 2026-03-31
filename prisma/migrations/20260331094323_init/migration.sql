/*
  Warnings:

  - You are about to drop the column `capacity` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `longDesc` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `shortDesc` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `venue` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the `Announcement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Material` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Material" DROP CONSTRAINT "Material_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_courseId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "capacity",
DROP COLUMN "duration",
DROP COLUMN "image",
DROP COLUMN "longDesc",
DROP COLUMN "price",
DROP COLUMN "shortDesc",
DROP COLUMN "venue",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "pricingMode" SET DEFAULT 'FREE';

-- DropTable
DROP TABLE "Announcement";

-- DropTable
DROP TABLE "Material";

-- DropTable
DROP TABLE "Review";
