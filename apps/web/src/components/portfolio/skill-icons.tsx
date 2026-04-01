'use client';

import {
    Apidog,
    Biomejs,
    Bun,
    ClaudeAI,
    CursorDark,
    Docker,
    ESLintDark,
    Figma,
    Firebase,
    Git,
    GitHubDark,
    Illustrator,
    JavaScript,
    Linear,
    MongoDBDark,
    Nextjs,
    Nodejs,
    Notion,
    Photoshop,
    Playwright,
    PnpmDark,
    PostgreSQL,
    PrismaDark,
    ReactDark,
    ReactQuery,
    Redis,
    Sentry,
    TailwindCSS,
    TypeScript,
    VercelDark,
    Vite,
    Vitest,
    Zod
} from '@ridemountainpig/svgl-react';
import { cn } from '@thegagan-portfoilio/ui/lib/utils';
import type { SVGProps } from 'react';
import type { SkillIconSlug } from '@/lib/portfolio-data';

type SvglIcon = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

/** Full-color SVG logos from [svgl.app](https://svgl.app/) via `@ridemountainpig/svgl-react`. */
const SVGL_MAP: Record<SkillIconSlug, SvglIcon> = {
    javascript: JavaScript,
    typescript: TypeScript,
    react: ReactDark,
    nextjs: Nextjs,
    tailwind: TailwindCSS,
    nodejs: Nodejs,
    vite: Vite,
    bun: Bun,
    mongodb: MongoDBDark,
    postgresql: PostgreSQL,
    redis: Redis,
    firebase: Firebase,
    prisma: PrismaDark,
    git: Git,
    github: GitHubDark,
    figma: Figma,
    photoshop: Photoshop,
    illustrator: Illustrator,
    cursor: CursorDark,
    linear: Linear,
    notion: Notion,
    biome: Biomejs,
    openapi: Apidog,
    docker: Docker,
    anthropic: ClaudeAI,
    zod: Zod,
    vitest: Vitest,
    playwright: Playwright,
    eslint: ESLintDark,
    sentry: Sentry,
    vercel: VercelDark,
    reactquery: ReactQuery,
    pnpm: PnpmDark
};

const baseCls = 'shrink-0 transition-transform duration-200 group-hover:scale-105 [filter:drop-shadow(0_1px_3px_rgb(0_0_0/0.45))]';

export function SkillIcon({ className, slug }: { className?: string; slug: SkillIconSlug }) {
    const Icon = SVGL_MAP[slug];
    return <Icon aria-hidden className={cn(baseCls, className ?? 'h-[22px] w-[22px]')} />;
}
