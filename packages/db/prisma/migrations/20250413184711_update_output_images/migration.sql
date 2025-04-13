-- CreateEnum
CREATE TYPE "TagEnum" AS ENUM ('Professional', 'Artistic', 'Anime', 'Fashion', 'Fantasy', 'Other');

-- AlterTable
ALTER TABLE "OutputImages" ADD COLUMN     "isDownloaded" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tag" "TagEnum" NOT NULL DEFAULT 'Other';
