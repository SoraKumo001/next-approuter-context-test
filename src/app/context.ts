import { createMixContext } from "next-approuter-context";

export const context1 = createMixContext<{ text: string; color: string }>(
  "context1"
);
export const context2 = createMixContext<number>("context2");
