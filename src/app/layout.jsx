import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import AuthProvider from "@/services/AuthProvider";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "BabelForge",
  description: "Generated by BabelForge Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
            <Toaster position="top-center" reverseOrder={false} />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
