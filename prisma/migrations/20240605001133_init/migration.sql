-- CreateTable
CREATE TABLE "BillingDetail" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "mobileNumber" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "fullAddress" TEXT NOT NULL,
    "transactionNumber" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BillingDetail_pkey" PRIMARY KEY ("id")
);
