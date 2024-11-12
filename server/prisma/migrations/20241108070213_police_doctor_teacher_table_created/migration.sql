-- DropForeignKey
ALTER TABLE "Doctor" DROP CONSTRAINT "Doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "Police" DROP CONSTRAINT "Police_id_fkey";

-- DropForeignKey
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_id_fkey";

-- DropIndex
DROP INDEX "Doctor_email_key";

-- DropIndex
DROP INDEX "Doctor_id_key";

-- DropIndex
DROP INDEX "Police_email_key";

-- DropIndex
DROP INDEX "Police_id_key";

-- DropIndex
DROP INDEX "Teacher_id_key";
