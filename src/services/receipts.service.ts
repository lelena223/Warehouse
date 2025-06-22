import prisma from "../prismaClient";

export const createReceipt = async (dataBody: any) => {
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
