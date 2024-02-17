import "./globals.css";
import NavBar from "@/components/NavBar";

//change the metadata later
export const metadata = {
  title: "Jack.org",
  description: "Mental health organization at Queen's University",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppin">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
