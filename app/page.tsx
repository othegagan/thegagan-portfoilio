import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import HeroSection from '@/components/sections/HeroSection';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

export default function Home() {
    return (
        <div className='relative flex flex-col overflow-x-hidden'>
            <main className='flex-1 '>
                <HeroSection />
                <AboutSection />
                <Experience />
                <Skills />
                <Projects />
                <ContactSection />
            </main>
        </div>
    );
}
