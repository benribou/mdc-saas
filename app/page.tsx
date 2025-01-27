"use client"
import LogoMdc from "@/public/logo.svg";
import Image from "next/image";
import ButtonsProvider from "./components/ButtonsProvider";
import { Typewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="w-full h-screen flex items-center justify-center flex-col gap-2">
      <Image width={100} height={100} alt="logo de minute code" src={LogoMdc} className="mb-4 object-contain"/>
      <h1 className="ext-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center">
        <Typewriter typeSpeed={50} words={["Bienvenue", "Welcome", "Willkommen", "Vienvenido", "Benvenuto"]} loop={0} />
        <span><Cursor/></span>
      </h1>
      <p className="my-2 text-center">Rejoingez une aventure de codeur avec La Minute Code</p>
      <ButtonsProvider/>
    </section>
  );
}
