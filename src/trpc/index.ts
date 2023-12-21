import { router, publicProcedure } from "./trpc";
export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return "hello from trpc";
  }),
});

export type AppRouter = typeof appRouter;
