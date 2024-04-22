import Logout from "@/components/logout";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { deleteSession } from "../actions/sessions";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unified Challenge",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleLogout = async () => {
    "use server";

    deleteSession();
  };

  return (
    <html lang="en">
      <body className={clsx(inter.className, "mx-64")}>
        <div>
          <div className="flex justify-between p-4 sticky top-0 bg-black/80">
            <Link href="/">Home</Link>
            <Logout handleLogout={handleLogout} />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
