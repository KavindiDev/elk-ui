import "./style.css";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className + " bg-white dark:bg-gray-950"}>
        {children}
      </body>
    </html>
  )
}