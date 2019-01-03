import React from 'react';
import bp from '../util/breakpoints';
import { css } from '@emotion/core';

const Container = ({size, children, columns}) => {

  let columnCss;

  if(columns && columns.length > 0) {
    columnCss = columns.map((column, index) => {
      if(index === 0) {
        return css`
          grid-template-columns: repeat(${columns[0]}, 1fr);
        `;
      } else {
        return(
          css`
            @media (min-width: ${bp[index-1]}) {
              grid-template-columns: repeat(${columns[index]}, 1fr);
            }
          `
        )
      }
    })
  }


  
  const containerStyles = css`
    display: grid;
    grid-gap: var(--gap);
    width: 100%;
    margin: 0 auto;
    max-width: var(--container-${size});
    ${columnCss}
    
    
  `
  return (
    <div css={containerStyles}>
      { children }
    </div>
  )
}

export default Container;