"use server";

import { getMixContext, useMixContext } from "next-approuter-context";
import type { ContextType1, ContextType2 } from "./context";

export const Server = () => {
  // If the component is async, it should be written as follows
  // const { text, color } = await getMixContext<ContextType1>();
  const { text, color } = useMixContext<ContextType1>("context1");
  const value = useMixContext<ContextType2>("context2");
  return (
    <>
      <div style={{ color }}>
        Server: {text} - {value}
      </div>
    </>
  );
};
