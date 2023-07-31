import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Skillset from "@/components/Skillset";

export default function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Skillset />

            <div className="w-full"></div>
        </>
    );
}
