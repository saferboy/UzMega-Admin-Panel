import { PrismaClient } from "@prisma/client";
import { PaymentDto } from "@model/payment";

const prisma = new PrismaClient()

export const createPayment = async (payBody: PaymentDto) => {
    return prisma.payment.create({
        data: {
            client: payBody.client,
            request_date:   payBody.request_date,
            paid_date:      payBody.paid_date,
            amount:         payBody.amount,
            trafik:         payBody.trafik,
            phone:          payBody.phone,
            status:         payBody.
        }
    })
}