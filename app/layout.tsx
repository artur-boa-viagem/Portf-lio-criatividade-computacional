import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio criatividade computacional",
  description: "Trabalho das IA aí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{padding: '4rem'}}>
        <h1 style={{fontSize: '2.5rem', textAlign: 'center'}} >Portfólio criatividade computacional</h1>
        {children}
      </body>
    </html>
  );
}
