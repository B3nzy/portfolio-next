import Navbar from "../components/navbar";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-blue-50 to-orange-100">
        <div className="h-24">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
