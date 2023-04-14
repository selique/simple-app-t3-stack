import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure
} from "~/server/api/trpc";

// Product CRUD operations
const zProduct = z.object({
  id: z.string().nonempty(),
  name: z.string().nonempty(),
  description: z.string().optional(),
  price: z.string(),
  image: z.string().optional(),
  category: z.enum(["product", "service"]),
});

type Product = z.infer<typeof zProduct>;

type CreateProductInput = Omit<Product, "id">;
type UpdateProductInput = Partial<Omit<Product, "id">>;

export const productRouter = createTRPCRouter({
  
  createProduct: protectedProcedure
  .input(zProduct)
  .mutation(({ ctx, input }) => {
    return ctx.prisma.product
      .create({
        data: { ...input },
      })
      .then((product) => product as Product)
      .catch(() => null);
  }),

  getAllProducts: protectedProcedure
  .query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  })
    
});
