"use client";

import { useMixContext } from "next-approuter-context";
import { context1, context2 } from "./context";

export const Client = () => {
  const { text, color } = useMixContext(context1);
  const value = useMixContext(context2);
  return (
    <>
      <div style={{ color }}>
        Client: {text} - {value}
      </div>
    </>
  );
};
