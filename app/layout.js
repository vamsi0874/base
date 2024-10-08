import AuthProvider from "./(components)/AuthProvider";

import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className="bg-gray-800">
          <div className="m-2">{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
