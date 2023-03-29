-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Success', 'Error');

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "client" TEXT NOT NULL,
    "request_date" TIMESTAMP(3) NOT NULL,
    "paid_date" TIMESTAMP(3) NOT NULL,
    "amount" TEXT NOT NULL,
    "trafik" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);
