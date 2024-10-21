import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MainContextProvider from "@/Context/MainContextProvider";

// Metadata export
export const metadata = {
  title: "Jack.org",
  description: "Mental health organization at Queen's University",
};

export const revalidate = 60;

export default async function RootLayout({ children }) {
  
  const res = await fetch("https://jack-org.vercel.app/api/main");

  const data = await res.json();

  return (
    <html lang="en">
      <body className="font-poppin">
        <MainContextProvider data={data}>
          <NavBar />
          {children}
          <Footer />
        </MainContextProvider>
      </body>
    </html>
  );
}
