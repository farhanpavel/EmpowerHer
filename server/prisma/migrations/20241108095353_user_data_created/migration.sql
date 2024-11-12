-- DropForeignKey
ALTER TABLE "Police" DROP CONSTRAINT "Police_id_fkey";

-- AddForeignKey
ALTER TABLE "Police" ADD CONSTRAINT "Police_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
