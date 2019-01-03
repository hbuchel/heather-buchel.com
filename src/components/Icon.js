import React from 'react';
import { css } from '@emotion/core';

const icon = css`
  display: inline-block;
  vertical-align: middle;
`

const Icon = props => {
  return (
    <svg css={icon} width={props.width} height={props.width} {...props}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  )
}

export default Icon;