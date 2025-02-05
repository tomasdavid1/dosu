// src/app/layout.tsx
import type { Metadata } from "next";
import "@styles/globals.css";

export const metadata: Metadata = {
  title: "Dosue Interview",
  description: "A web-based TODO list ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-blue-50 text-gray-900 flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
