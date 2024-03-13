import "./globals.css";
import "../styles/main.scss";
import { getServerSession } from "next-auth";
import CustomTheme from "./CustomTheme";
import { SessionProvider } from "../utility/providers/SessionProvider";
import ClientProvider from "../utility/providers/ClientProvider";
import { authOptions } from "../utility/auth/[...nextauth]";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hemi Sync",
  description: "Next.js + NextAuth.js + Material-UI + Emotion + Strapi + PostgreSQL + Vercel",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <CustomTheme>
            <ClientProvider>
              {children}
            </ClientProvider>
          </CustomTheme>
        </SessionProvider>
      </body>
    </html>
  );
}
