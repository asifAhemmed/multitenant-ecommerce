"use client";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarSidebar from "./navbar-sidebar";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {  MenuIcon } from "lucide-react";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface Props {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: Props) => {
  return (
    <Button variant={"outline"}
     className={cn("bg-transparent hover:bg-transparent rounded-full border-transparent hover:border-primary px-3.5 text-lg",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
     )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
  {
    href: "/features",
    children: "Features",
  },
  {
    href: "/pricing",
    children: "Pricing",
  },
  {
    href: "/contact",
    children: "Contact",
  },
];

const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  return (
    <nav className="h-20 flex justify-between border-b font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>
      <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen}/>
      <div className="items-center hidden lg:flex gap-4">
        {navbarItems.map((item) => (
          <NavbarItem key={item.href} href={item.href} isActive={pathname === item.href}>
            {item.children}
          </NavbarItem>
        ))}
      </div>
       <div className="flex lg:hidden items-center justify-center">
            <Button
             variant="ghost"
             className="size-12 border-transparent bg-white"
             onClick={()=> setIsSidebarOpen(true)}
            >
                <MenuIcon />
            </Button>
       </div>
      <div className="hidden lg:flex">
        <Button
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0  px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
            Log in
        </Button>
        <Button
         className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400
         hover:text-black transition-colors text-lg"
        >
            Start selling
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
