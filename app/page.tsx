'use client';

import { useEffect } from 'react';
import { styled } from '@/styles/stitches';
import { flex } from '@/styles/utils';
import Hello from '@/components/home/Hello/Hello';

export default function Page() {
    useEffect(() => {
        console.log('hello viewport', {
            width: window.innerWidth,
            height: window.innerHeight
        });
    }, []);

    return (
        <Main>
            <Hello />
        </Main>
    );
}

const Main = styled('main', {
    height: '100vh',
    ...flex({ flexDirection: 'column', alignItems: 'center' })
});
