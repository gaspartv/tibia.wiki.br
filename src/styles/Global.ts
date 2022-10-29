import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    :root {
        --font-family-1: 'Poppins', sans-serif;
        --font-family-2: 'Fuzzy Bubbles', cursive;

        --color-1: #c0c0c0;
        --color-2: #348e91;
        --color-3: #1c5052;
        --color-4: #213635;
        --color-5: #0a0c0d;

        --color-grey-1: #585858;
        --color-grey-2: #484848;
        --color-grey-3: #414141;
        --color-grey-4: #363636;

    }

    body {
        background-color: var(--color-1);
        font-family: var(--font-family-1);
    }
`;
export const ContainerStyled = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;
