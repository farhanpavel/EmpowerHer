/*
  Warnings:

  - You are about to drop the column `Thana` on the `Police` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Doctor` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Police` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Teacher` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Doctor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Police` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thana` to the `Police` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Police" DROP COLUMN "Thana",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "thana" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Doctor_id_key" ON "Doctor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Police_id_key" ON "Police"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_id_key" ON "Teacher"("id");

-- AddForeignKey
ALTER TABLE "Police" ADD CONSTRAINT "Police_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
