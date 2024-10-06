import TransitionProvider from "@/components/transition-provider";
import "./globals.css";

export const metadata = {
  title: "Sumit's Portfolio",
  description: "Sumit Mandal's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>{children}</TransitionProvider>
        {/* we can write the above line like this as well */}
        {/* <TransitionProvider children={children} /> */}
      </body>
    </html>
  );
}
