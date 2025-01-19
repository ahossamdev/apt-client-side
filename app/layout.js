"use client";
import Navbar from "./../components/navbar/Navbar";
import "./../app/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          <Navbar />
          {children}
        </>
      </body>
    </html>
  );
}
