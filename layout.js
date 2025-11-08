import { Open_Sans } from "next/font/google";
import Link from "next/link";
import styles from "./rootStyle.module.css";
// import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <header className={styles.header}>
          <h1>My Home page</h1>
          <h2>
            <Link href="/blog">blog</Link>
          </h2>
          <h2>
            <Link href="/settings">settings</Link>
          </h2>
          <h2>
            <Link href="/conference">conference</Link>
          </h2>
        </header>
        {children}
      </body>
    </html>
  );
}
