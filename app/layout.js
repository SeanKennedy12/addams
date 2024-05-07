import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Addams Family - The Musical",
  description: "Caldervale High School presents The Addams Family - The Musical",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <Script src="https://www.eventbrite.co.uk/static/widgets/eb_widgets.js"></Script>
        <Script src="/components/myscript.js"></Script>
      </Head> */}
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
