import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure
} from "~/server/api/trpc";


// Proposal CRUD operations
const zProposal = z.object({
  id: z.string().nonempty(),
  description: z.string().optional(),
  price: z.string(),
});

type Proposal = z.infer<typeof zProposal>;

type CreateProposalInput = Omit<Proposal, "id">;
type UpdateProposalInput = Partial<Omit<Proposal, "id">>;

export const proposalRouter = createTRPCRouter({
  
  createProposal: protectedProcedure
  .input(zProposal)
  .mutation(({ ctx, input }) => {
    return ctx.prisma.proposal
      .create({
        data: { ...input },
      })
      .then((proposal) => proposal as Proposal)
      .catch(() => null);
  }),

  getAllProposals: protectedProcedure
  .query(({ ctx }) => {
    return ctx.prisma.proposal.findMany();
  })
    
});
