import Link from 'next/link';
import { styled } from '@/styles/stitches';

export default function Hello() {
    return (
        <Wrapper>
            <h1>next-13 starter</h1>
            <p>
                <strong>featuring:</strong>
            </p>
            <ul>
                <li>Typescript</li>
                <li>Eslint & Prettier Config</li>
                <li>Stitches Styling</li>
            </ul>
            <div>
                <span>by: </span>
                <Link href="https://github.com/hcsvnt">hcsvnt</Link>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.withConfig({ displayName: 'hello-wrapper' })('div', {
    width: 'fit-content',
    padding: '2em 3em',
    backgroundColor: 'pink',

    h1: {
        textAlign: 'center'
    },

    p: {},

    div: {
        display: 'inline-block',
        width: '100%',
        fontSize: '1.25em',
        fontWeight: 'bold',
        textAlign: 'right',
        textUnderlineOffset: '0.1em'
    }
});
