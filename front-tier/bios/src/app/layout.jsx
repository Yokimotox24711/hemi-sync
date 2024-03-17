import { Inter } from "next/font/google";
import "../styles/main.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { SessionProvider } from "@/components/Providers/SessionProvider/SessionProvider";
import Login from "./login/page";
import FXProvider from "@/components/Providers/FXProvider/FXProvider";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {/* <FXProvider> */}
            {!session ? <Login /> : <> {children} </>}
          {/* </FXProvider> */}
        </SessionProvider>
      </body>
    </html>
  );
}
