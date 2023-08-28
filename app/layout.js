import '@/app/globals.css'
import Mycontext from "@/components/maincontext";
import Nav from "@/components/home/nav";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Mycontext>
          <Nav />
          <>{children}</>
        </Mycontext>
      </body>
    </html>
  );
}
