import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Text = ({as, children, variant, size, className, lh, color, inline}) => {

  let El = as;
  
  let fontVariant;

  if(variant !== 'default') {
    fontVariant = css`
      font-family: var(--font-${variant});
    `;
  }

  const inlineStyle = css`
    display: inline;
  `
  
  const text = css`
    font-size: var(--size-text-${size});
    line-height: var(--size-lh-${lh});
    color: var(--color-${color});
    ${fontVariant};
    ${inline ? inlineStyle : ''}
  `

  return (
    <El css={text} className={className}>
      { children }
    </El>
  )
}

Text.propTypes = {
  as: PropTypes.oneOf([
    'p',
    'div',
    'span',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
  ]),
  size: PropTypes.oneOf([
    'default',
    's',
    'm',
    'l'
  ]),
  variant: PropTypes.oneOf([
    'default',
    'fancy'
  ]),
  lh: PropTypes.oneOf([
    's',
    'l'
  ]),
  color: PropTypes.oneOf([
    'fancy',
    'text',
    'alt'
  ]),
  margin: PropTypes.array
}

Text.defaultProps = {
  as: 'div',
  variant: 'default',
  lh: 'l',
  color: 'text'
}

export default Text;

