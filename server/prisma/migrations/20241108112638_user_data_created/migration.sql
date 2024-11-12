/*
  Warnings:

  - Added the required column `nidUrl` to the `Complain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Complain" ADD COLUMN     "nidUrl" TEXT NOT NULL;
