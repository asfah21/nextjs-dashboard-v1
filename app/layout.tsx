import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import { Providers } from "./providers";
import { ThemeProvider } from "next-themes";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <Providers>
              <main className="flex-1">{children}</main>
              {/* <Footer/> */}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
