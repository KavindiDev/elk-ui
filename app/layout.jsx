import "./style.css";
import { Archivo } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import CommonMetadata from "@/components/CommonMetadata";

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = CommonMetadata

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className + " bg-white dark:bg-gray-950"}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  )
}