import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Providers } from "./provider";
import { Footer } from "@/components/footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "RDK Dev",
  description: "Portofolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-primary flex flex-col justify-between min-h-screen`}
        suppressHydrationWarning={true}
      >
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
