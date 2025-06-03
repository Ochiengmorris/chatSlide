import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

const Jakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatSlide",
  description: "Automate DMs and comments on instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${Jakarta.className} antialiased`}>
        <ClerkProvider>
          <div className="bg-background">
            <ReactQueryProvider>
              <main> {children}</main>
            </ReactQueryProvider>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
