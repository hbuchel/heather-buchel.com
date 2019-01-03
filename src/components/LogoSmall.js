import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const logoStyles = css`
  display: inline-block;
  color: var(--color-fancy);
  text-transform: lowercase;
  font-family: var(--font-fancy);
  font-weight: 900;
  font-style: italic;
  font-size: 3.2rem;
  line-height: var(--size-lh-s);
  box-shadow: none;
  padding: 12px;
  &:hover {
    box-shadow: none;
  }
`

const LogoSmall = () => (
  <Link to={'/'} css={logoStyles}>hb</Link>
);

export default LogoSmall;