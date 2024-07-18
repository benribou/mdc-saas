"use client";
import Link from "next/link";
import Image from "next/image";
import LogoMdc from "@/public/logo.svg";
import { ThemeToggle } from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex item-center justify-between p-5 border-b border-gray-300">
      <div>
        <Link href='/'>
          <Image width={30} height={30} src={LogoMdc} alt="Logo minute code" className="w-12 h-12"/>
        </Link>
      </div>

      <div className="flex item-center gap-4">
        <ThemeToggle/>
      </div>
    </nav>
  )
}
