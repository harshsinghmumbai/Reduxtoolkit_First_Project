import { Inter } from "next/font/google";
import "./globals.css";
import RTK_Provider from "@/Store/RTK_Provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reduxtoolkit First Project",
  description:
    "Creating my my First Reduxtoolkit Project a Basic level project",
  icons: {
    icon: ["/logo.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RTK_Provider>
          <main className="max-w-[1024px] m-auto">{children}</main>
          <Toaster />
        </RTK_Provider>
      </body>
    </html>
  );
}
