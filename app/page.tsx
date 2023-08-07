import About from "@/components/About";
import Footer from "@/components/Footer";
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
            <Footer />
        </>
    );
}
