import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skillset from "@/components/Skillset";

export default function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Skillset />
            <Projects />

            <div className="w-full"></div>
        </>
    );
}
