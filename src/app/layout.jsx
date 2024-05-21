import { Montserrat } from "next/font/google";

import { ChakraClientProvider } from "../providers/ChakraClientProvider";
import theme from "../theme";

export const metadata = {
  title: "Xcelerator",
  description: "Xcelerator App",
};

const montserrat = Montserrat({ subsets: ["latin"] });
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ChakraClientProvider>{children}</ChakraClientProvider>
      </body>
    </html>
  );
}
