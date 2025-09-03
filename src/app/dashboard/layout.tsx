import type { Metadata } from "next";
import Link from "next/link";
import { MdAccountCircle, MdHome, MdOutlineAccountCircle, MdOutlineArticle, MdOutlineMenu, MdOutlineOtherHouses } from "react-icons/md";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Wika Tjj K3 Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <main
        className={`max-w-md w-full font-sans grid justify-items-center min-h-screen pb-20 p-4  text-[#FFF9AF]`}
      >
        {children}
        <footer className="max-w-md w-full absolute bottom-4 z-[999]">
          <div className="rounded-full bg-[#1C6EA4] h-16 flex justify-around items-center p-2">
            <Link href="/dashboard"><MdOutlineOtherHouses className="text-3xl"/></Link>
            <Link href="/dashboard"><MdOutlineArticle className="text-3xl"/></Link>
            <Link href="/dashboard"><MdOutlineAccountCircle className="text-3xl"/></Link>
            <Link href="/dashboard"><MdOutlineMenu className="text-3xl"/></Link>
          </div>
        </footer>
      </main>
   
  );
}
