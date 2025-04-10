'use client';

import { useEffect, useRef, useState } from 'react';
import * as motion  from 'motion/react-client';

export default function LazyFragment({ load, id, prefetchNext }) {
    const ref = useRef();
    const [visible, setVisible] = useState(false);
    const [Component, setComponent] = useState(null); 
        
    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && !Component) {
                load().then(mod => {
                    setComponent(() => mod.default);
                    setVisible(true);
                    if (prefetchNext) {
                    prefetchNext(); // silently preload the next fragment
                    }
                });
                observer.unobserve(ref.current);
            }
        },
        {
            rootMargin: '200px',
        }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [load, Component, prefetchNext]);

    return (
        <div ref={ref} id={`fragment-${id}`} className="my-64 mt-32">
        {Component && (
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
            <Component />
            </motion.div>
        )}
        </div>
    );
}
