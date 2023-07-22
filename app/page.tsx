import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Herobg from "@/public/hero-bg.png"

export default function Home() {
    return (
        <>
            <HeroSection />
            <Image src={Herobg}  alt="hero-bg"  className="hidden md:block transition-opacity ease-in  absolute top-40 dark:animate-pulse dark:opacity-20 duration-300 bg-cover opacity-100 w-full "  />
        </>
    );
}
