import { AboutSection } from './about-section';
import { ContactSection } from './contact-section';
import { CustomCursor } from './custom-cursor';
import { Hero } from './hero';
import { MarqueeStrip } from './marquee-strip';
import { PortfolioEffects } from './portfolio-effects';
import { ProjectsSection } from './projects-section';
import { SiteFooter } from './site-footer';
import { SiteNav } from './site-nav';
import { SkillsSection } from './skills-section';
import { TimelineSection } from './timeline-section';

export function PortfolioPage() {
    return (
        <div
            className='min-h-screen cursor-none overflow-x-hidden bg-portfolio-bg font-sans text-portfolio-text antialiased selection:bg-orange-500/30'
            data-portfolio>
            <CustomCursor />
            <SiteNav />
            <Hero />
            <MarqueeStrip />
            <AboutSection />
            <TimelineSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <SiteFooter />
            <PortfolioEffects />
        </div>
    );
}
