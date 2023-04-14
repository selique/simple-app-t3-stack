import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure
} from "~/server/api/trpc";


const zCustomer = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  description: z.string().optional(),
  image: z.string().optional(),
});

const zCustomerInput =  zCustomer.omit({ id: true });

type Customer = z.infer<typeof zCustomer>;

type CreateCustomerInput = z.infer<typeof zCustomerInput>;

export const customerRouter = createTRPCRouter({
  
  createCustomer: protectedProcedure
  .input(zCustomerInput)
  .mutation(({ ctx, input }) => {
    return ctx.prisma.customer
      .create({
        data: { ...input },
      })
      .then((customer) => customer as Customer)
      .catch(() => null);
  }),

  getAllCustomers: protectedProcedure
  .query(({ ctx }) => {
    return ctx.prisma.customer.findMany();
  })
    
});
