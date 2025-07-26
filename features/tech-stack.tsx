import { Icon } from '@/components/icons';
import { Prose } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { Panel, PanelContent, PanelHeader, PanelTitle } from './_components/panel';

export function TeckStack() {
    return (
        <Panel id="stack">
            <PanelHeader>
                <PanelTitle>Stack</PanelTitle>
            </PanelHeader>

            <PanelContent
                className={cn(
                    '[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5',
                    'bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-center bg-size-[10px_10px]',
                    'bg-zinc-950/0.75 dark:bg-white/0.75'
                )}>
                <Prose className="space-y-5">
                    <div className="text-muted-foreground">
                        My primary tech stack includes the <Icon name="NextJs" /> framework, complemented by <Icon name="TailwindCSS" /> for
                        exquisite styling. I also leverage ShadCN and React Aria components to enhance user experience. For deployment,
                        <Icon name="Vercel" /> is my go-to platform to launch my projects. Lastly, I bring my creative visions to life using
                        the <Icon name="Cursor" /> IDE 🤍.
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="carrois-gothic-sc text-muted-foreground/70 text-sm">&lt;languages/&gt;</div>
                            <div className="flex flex-row flex-wrap gap-2">
                                <Icon name="TypeScript" />
                                <Icon name="JavaScript" />
                                <Icon name="HTML" />
                                <Icon name="CSS" />
                                <Icon name="NodeJs" />
                                <Icon name="SVGAnimation" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="carrois-gothic-sc text-muted-foreground/70 text-sm">&lt;frameworks/&gt;</div>
                            <div className="flex flex-row flex-wrap gap-2">
                                <Icon name="React" />
                                <Icon name="NextJs" />
                                <Icon name="TailwindCSS" />
                                <Icon name="BiomeJs" />
                                <Icon name="ReactQuery" nameOverride="TankStack Query" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="carrois-gothic-sc text-muted-foreground/70 text-sm">&lt;platforms/&gt;</div>
                            <div className="flex flex-row flex-wrap gap-2">
                                <Icon name="Github" />
                                <Icon name="Vercel" />
                                <Icon name="Cloudflare" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="carrois-gothic-sc text-muted-foreground/70 text-sm">&lt;softwares/&gt;</div>
                            <div className="flex flex-row flex-wrap gap-2">
                                <Icon name="Cursor" />
                                <Icon name="VSCode" />
                                <Icon name="Apidog" />
                                <Icon name="Postman" />
                                <Icon name="Figma" />
                                <Icon name="Photoshop" />
                                <Icon name="Illustrator" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="carrois-gothic-sc text-muted-foreground/70 text-sm">&lt;dev ops/&gt;</div>
                            <div className="flex flex-row flex-wrap gap-2">
                                <Icon name="GithubActions" nameOverride="Github Actions(CI/CD)" />
                                <Icon name="Authentication" nameOverride="Authentication (OAuth, JWT)" />
                            </div>
                        </div>
                    </div>
                    <span className="mt-4 text-muted-foreground/70 text-sm">Few more ... but secret hehehe :3</span>
                </Prose>
            </PanelContent>
        </Panel>
    );
}
