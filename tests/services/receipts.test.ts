import request from "supertest";
import app from "../../app";
import prisma from "../../src/prismaClient";

describe("TC01: Create receipt", () => {
  let warehouseId: number;
  let supplierId: number;

  beforeAll(async () => {
    // Tạo warehouse
    const warehouse = await prisma.warehouse.create({
      data: {
        name: "Kho A",
        location: "Hà Nội",
      },
    });

    // Tạo supplier
    const supplier = await prisma.supplier.create({
      data: {
        name: "Nhà cung cấp A",
      },
    });

    warehouseId = warehouse.id;
    supplierId = supplier.id;
  });

  it("should create receipt successfully", async () => {
    const res = await request(app)
      .post("/api/receipts")
      .send({
        code: "RC001",
        date: new Date("2025-06-22T19:55:16.328Z"),
        documentNumber: "HD123456",
        documentDate: new Date("2025-06-22T00:00:00.000Z"),
        warehouseId,
        supplierId,
        items: [
          {
            name: "Ghế nhựa",
            model: "G123",
            unit: "Cái",
            quantityDoc: "5.00",
            quantityActual: "5.00",
            unitPrice: "100000.00",
            amount: "500000.00",
          },
          {
            name: "Bàn inox",
            model: "B456",
            unit: "Cái",
            quantityDoc: "2.00",
            quantityActual: "2.00",
            unitPrice: "300000.00",
            amount: "600000.00",
          },
        ],
      });

    expect(res.status).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.code).toBe("RC001");
  });

  afterAll(async () => {
    await prisma.importReceiptItem.deleteMany();
    await prisma.importReceipt.deleteMany();
    await prisma.warehouse.deleteMany();
    await prisma.supplier.deleteMany();
  });
});
