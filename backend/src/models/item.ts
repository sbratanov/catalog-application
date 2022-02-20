import { Static, Type } from "@sinclair/typebox";

export const itemSchema = Type.Object({
  id: Type.Integer({ minimum: 0 }),
});

export type Item = Static<typeof itemSchema>;
