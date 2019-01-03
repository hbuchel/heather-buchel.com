import React from 'react';
import { css } from '@emotion/core';
import Box from './Box';
import Text from './Text';

const socialList = css`
  display: inline-block;
  li {
    display: inline-block;
    margin: 0 12px;
   
  }
`;

const Social = () => {
  return (
    <Box className="u-text-center">
      <Text variant="fancy" as="h2" inline size="default" className="u-margin-bottom">Find me on:</Text>
      <ul css={ socialList }className="u-list-plain">
        <li>
          <a href="https://twitter.com/hbuchel">Twitter</a>
        </li>
        <li>
          <a href="https://codepen.io/hbuchel">Codepen</a>
        </li>
      </ul>
    </Box>
  )
}

export default Social;