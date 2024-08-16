-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "backgroundImageUrl" TEXT NOT NULL,
    "profilePictureUrl" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "followers" INTEGER NOT NULL,
    "following" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
