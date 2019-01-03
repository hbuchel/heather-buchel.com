import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Box = ({children, padding, as, className}) => {
  let El = as;
  const box = css`
    padding: calc(var(--gap) * ${padding});
    & > *:first-child {
      margin-top: 0;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  `
  return(
    <El css={box} className={className}>
      { children }
    </El>
  )
}

Box.propTypes = {
  padding: PropTypes.string,
  as: PropTypes.oneOf([
    'header',
    'div',
    'footer',
    'aside'
  ])
}

Box.defaultProps = {
  padding: "0",
  as: "div"
}

export default Box;