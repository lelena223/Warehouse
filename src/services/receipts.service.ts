import prisma from "../prismaClient";
import { AppError } from "../utils/appError.util";

export const createReceipt = async (dataBody: any) => {
  if (!dataBody.items) {
    throw new AppError("Missing items", 400);
  }
  if (!dataBody.warehouseId) {
    throw new AppError("Missing warehouseId", 400);
  }
  if (!dataBody.supplierId) {
    throw new AppError("Missing supplierId", 400);
  }

  const warehouse = await prisma.warehouse.findUnique({
    where: { id: dataBody.warehouseId },
  });
  if (!warehouse) {
    throw new AppError("Warehouse not found", 400);
  }
  const supplier = await prisma.supplier.findUnique({
    where: { id: dataBody.supplierId },
  });
  if (!supplier) {
    throw new AppError("Supplier not found", 400);
  }

  const existed = await prisma.importReceipt.findUnique({
    where: { code: dataBody.code },
  });

  if (existed) {
    throw new AppError("Code already exists", 400);
  }

  const receipt = await prisma.importReceipt.create({
    data: {
      ...dataBody,
      items: {
        create: dataBody.items,
      },
    },
    include: { items: true },
  });
  return receipt;
};
