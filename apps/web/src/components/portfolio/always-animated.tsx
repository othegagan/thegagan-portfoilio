'use client';

import { useEffect, useRef } from 'react';

interface AnimationHandle {
    startAnimation: () => void;
    stopAnimation: () => void;
}

interface AlwaysAnimatedProps {
    children: (ref: React.RefObject<AnimationHandle | null>) => React.ReactNode;
    interval?: number;
}

export function AlwaysAnimated({ children, interval = 2000 }: AlwaysAnimatedProps) {
    const ref = useRef<AnimationHandle>(null);

    useEffect(() => {
        const animate = () => ref.current?.startAnimation();
        animate();
        const id = setInterval(animate, interval);
        return () => clearInterval(id);
    }, [interval]);

    return <>{children(ref)}</>;
}
