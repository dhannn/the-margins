'use client';

import LazyFragment from './LazyFragment';
import { fragments } from '@/app/content/fragments';

export default function FragmentScroller() {
    
    return (
        <div>
        {fragments.map(({ id, file }, index) => {
            const next = fragments[index + 1];
            return (
            <LazyFragment
                key={id}
                id={id}
                load={file}
                prefetchNext={next ? next.file : null}
            />
            );
        })}
        </div>
    );
}
