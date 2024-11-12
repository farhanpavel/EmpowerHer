-- CreateTable
CREATE TABLE "Complain" (
    "complainId" TEXT NOT NULL,
    "policename" TEXT NOT NULL,
    "thana" TEXT NOT NULL,
    "women_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Complain_pkey" PRIMARY KEY ("complainId")
);
