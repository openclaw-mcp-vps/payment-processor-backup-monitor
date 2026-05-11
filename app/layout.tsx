import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Payment Processor Backup Monitor",
  description: "Monitor payment processor health and auto-switch to backup processors. Keep your revenue flowing 24/7."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8ac30f40-da42-4fdd-88d4-4fc54f7b26b6"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
