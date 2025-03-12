import SiteHeader from "@/components/SiteHeader";
import "./globals.css";
import ShoppingCartProvider from "@/context/ShoppingCartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ShoppingCartProvider>
          <SiteHeader />
          {children}
        </ShoppingCartProvider>
      </body>
    </html>
  );
}
