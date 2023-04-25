import { createStitches } from '@stitches/react';

export const { styled, css, theme, createTheme, getCssText } = createStitches({
    utils: {
        //
    },
    media: {
        horizontal: '(orientation: landscape)',
        vertical: '(orientation: portrait)',
        phone: '(max-width: 599px)',
        tablet: '(max-width: 1023px)',
        laptop: '(min-width: 1024px) and (max-width: 1319px)',
        hd: '(min-width: 1920px)',
        touch: '(hover: none)'
    },
    theme: {
        //
    }
});
