/*
  Warnings:

  - You are about to drop the `Receipt` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ReceiptItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ReceiptItem" DROP CONSTRAINT "ReceiptItem_receiptId_fkey";

-- DropTable
DROP TABLE "Receipt";

-- DropTable
DROP TABLE "ReceiptItem";

-- CreateTable
CREATE TABLE "Warehouse" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImportReceipt" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "documentNumber" VARCHAR(50),
    "documentDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "warehouseId" INTEGER NOT NULL,
    "supplierId" INTEGER NOT NULL,

    CONSTRAINT "ImportReceipt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImportReceiptItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "unit" VARCHAR(50),
    "quantityDoc" DECIMAL(10,2) NOT NULL,
    "quantityActual" DECIMAL(10,2) NOT NULL,
    "unitPrice" DECIMAL(12,2) NOT NULL,
    "amount" DECIMAL(14,2) NOT NULL,
    "receiptId" INTEGER NOT NULL,

    CONSTRAINT "ImportReceiptItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ImportReceipt_code_key" ON "ImportReceipt"("code");

-- AddForeignKey
ALTER TABLE "ImportReceipt" ADD CONSTRAINT "ImportReceipt_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportReceipt" ADD CONSTRAINT "ImportReceipt_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImportReceiptItem" ADD CONSTRAINT "ImportReceiptItem_receiptId_fkey" FOREIGN KEY ("receiptId") REFERENCES "ImportReceipt"("id") ON DELETE CASCADE ON UPDATE CASCADE;
