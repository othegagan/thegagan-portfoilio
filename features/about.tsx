import { Prose } from '@/components/ui/typography';
import { Panel, PanelContent, PanelHeader, PanelTitle } from './_components/panel';

export function About() {
    return (
        <Panel id="about">
            <PanelHeader>
                <PanelTitle>About</PanelTitle>
            </PanelHeader>

            <PanelContent>
                <Prose className="space-y-3">
                    <div>
                        Hello there..!👋🏻 I am Gagan Kumar, a software developer with a passion for creating innovative and high-quality
                        software solutions. I have a strong background in web development, particularly in React and TypeScript, and have
                        experience working with various front-end frameworks and libraries.
                    </div>
                    <br />
                    With 2 years of experience, I specialize in building high-quality web and mobile applications using Next.js, React,
                    TypeScript, and modern front-end technologies. Beyond work, I love exploring new technologies and turning ideas into
                    reality through personal projects. Let's connect and collaborate!
                </Prose>
            </PanelContent>
        </Panel>
    );
}
