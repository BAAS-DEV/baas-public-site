import MainNav from "../lib/Navigation/MainNav";
import Footer from "../lib/Sections/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />
      <body>
        <MainNav />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
