import { ZodInterestSchema } from "../../zod/index.js";
import type { Request, Response } from "express";
import { db } from "../../lib/prisma.js";

const Interest = {
  async postInterest(req: Request, res: Response) {
    try {
      const { success, data } = ZodInterestSchema.safeParse(req.body);
      if (!success) {
        return res.status(400).json({
          message: "fields can't be empty",
          success: false,
        });
      }
      // we can validate the email unique for this use case it does not required
      await db.interest.create({
        data: {
          name: data.name,
          email: data.email,
          selectedStep: data.step,
        },
      });
      return res.status(201).json({
        message: "interest recorded successfully",
        success: true,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "internal server error",
        success: false,
      });
    }
  },
};

export { Interest };
