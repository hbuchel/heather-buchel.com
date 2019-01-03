import React from 'react';
import { css } from '@emotion/core';

const logoStyles = css`
  text-align: center;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  color: var(--color-fancy);
  text-transform: lowercase;
  font-family: var(--font-fancy);
  font-weight: 900;
  font-style: italic;
  font-size: 16vw;
  line-height: var(--size-lh-s);
  @media (min-width: 480px) {
    font-size: 9vw;
  }
`

const LogoLarge = () => (
  <h1 css={logoStyles}>Heather Buchel</h1>
);

export default LogoLarge;