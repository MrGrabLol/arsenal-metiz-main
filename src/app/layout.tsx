import type { Metadata } from "next";
import { Inter, Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { ContactModalProvider } from "./contexts/ContactModalContext";
import { CartProvider } from "./contexts/CartContext";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Арсенал Метиз",
  description: "Сварочная проволока российского производства",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ContactModalProvider>
        <CartProvider>
          <body
            className={`${bebasNeue.variable} ${inter.variable} ${oswald.variable}`}
          >
            <Header />
            <main className="relative">{children}</main>
            <Footer />
          </body>
        </CartProvider>
      </ContactModalProvider>
    </html>
  );
}
