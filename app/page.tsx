import About from "@/components/About";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Personal from "@/components/Personal";
import Projects from "@/components/Projects";
import Skillset from "@/components/Skillset";

export default function Home() {
    return (
        <>
            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">

                <About />
                <Experience />
                <Projects />
                <Personal />
                <Footer />



            </main>


        </>
    );
}
