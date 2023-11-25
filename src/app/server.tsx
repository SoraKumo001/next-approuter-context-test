"use server";

import { useMixContext } from "next-approuter-context";
import { context1, context2 } from "./context";

export const Server = () => {
  // If the component is async, it should be written as follows
  // const { text, color } = await getMixContext<ContextType1>();
  const { text, color } = useMixContext(context1);
  const value = useMixContext(context2);
  return (
    <>
      <div style={{ color }}>
        Server: {text} - {value}
      </div>
    </>
  );
};
