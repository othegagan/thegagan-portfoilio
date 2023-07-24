import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Skillset from "@/components/Skillset";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <div className="relative overflow-hidden   "></div>

           

            <HeroSection />
            <About />
            <Skillset />
        </>
    );
}
