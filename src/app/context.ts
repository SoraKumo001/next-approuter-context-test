import { createMixContext } from "next-approuter-context";

export type ContextType1 = { text: string; color: string };
export const context1 = createMixContext<ContextType1>("context1");

export type ContextType2 = number;
export const context2 = createMixContext<ContextType2>("context2");
