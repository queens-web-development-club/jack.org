import "./globals.css";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MainContextProvider from "@/Context/MainContextProvider";

// Metadata export
export const metadata = {
  title: "Jack.org",
  description: "Mental health organization at Queen's University",
};

// RootLayout component
export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="font-poppin">
        <MainContextProvider>
          <NavBar />
          {children}
          <Footer />
        </MainContextProvider>
      </body>
    </html>
  );
}
