import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";

export const metadata: Metadata = {
  title: "UTM Builder",
  description: "UTM Builder 자동화 툴",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
