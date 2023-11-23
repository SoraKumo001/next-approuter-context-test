import { context1, context2 } from "./context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <context1.Provider
          value={{ text: "Send colors and text from Layout", color: "red" }}
        >
          <context2.Provider value={123456}>{children}</context2.Provider>
        </context1.Provider>
      </body>
    </html>
  );
}
