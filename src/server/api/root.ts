import { customerRouter } from "~/server/api/routers/customer";
import { productRouter } from "~/server/api/routers/product";
import { proposalRouter } from "~/server/api/routers/proposal";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  customer: customerRouter,
  product: productRouter,
  proposal: proposalRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
