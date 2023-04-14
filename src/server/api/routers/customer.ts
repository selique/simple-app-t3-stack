import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure
} from "~/server/api/trpc";


// Customer CRUD operations
const zCustomer = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  description: z.string().optional(),
  image: z.string().optional(),
});

type Customer = z.infer<typeof zCustomer>;

type CreateCustomerInput = Omit<Customer, "id">;
type UpdateCustomerInput = Partial<Omit<Customer, "id">>;

export const customerRouter = createTRPCRouter({
  
  createCustomer: protectedProcedure
  .input(zCustomer)
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
