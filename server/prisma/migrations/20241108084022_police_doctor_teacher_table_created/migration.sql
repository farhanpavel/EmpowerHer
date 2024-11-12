/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Police` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Police_id_key" ON "Police"("id");

-- AddForeignKey
ALTER TABLE "Police" ADD CONSTRAINT "Police_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
