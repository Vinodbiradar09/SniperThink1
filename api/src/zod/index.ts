import { z } from "zod";

const ZodInterestSchema = z.object({
  name: z.string().min(3, "name is required atleast 3 chars"),
  email: z.email(),
  step: z.string(),
});

export { ZodInterestSchema };
