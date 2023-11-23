"use client";

import { useMixContext } from "next-approuter-context";
import type { ContextType1, ContextType2 } from "./context";

export const Client = () => {
  const { text, color } = useMixContext<ContextType1>("context1");
  const value = useMixContext<ContextType2>("context2");
  return (
    <>
      <div style={{ color }}>
        Client: {text} - {value}
      </div>
    </>
  );
};
