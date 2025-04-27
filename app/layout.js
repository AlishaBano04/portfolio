import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["Outfit"],
  weight: ["400", "500", "600", "700"],
});

// /const ovo = Ovo({
//   subsets: ["latin"],
//   weight: ["400"],
// });

export const metadata = {
  title: "My-Personal-Site",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
