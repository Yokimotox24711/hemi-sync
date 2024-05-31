import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/main.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SessionProvider } from "@/components/SessionProvider/SessionProvider";
import Login from "./login/page";
import CustomTheme from "@/components/ThemeProvider/CustomTheme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "One Rock | Business Manager",
  description: "A central place to manage your business.",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <CustomTheme>
            {!session ? <Login /> : <> {children} </>}
          </CustomTheme>
        </SessionProvider>
      </body>
    </html>
  );
}
