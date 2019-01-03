import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/core'


import Icons from './Icons';
import LogoSmall from './LogoSmall';
import Box from './Box';
import Footer from './Footer';
import bp from '../util/breakpoints';

class Layout extends React.Component {
  render() {
    const globalStyles = css`
      :root {
        --color-fancy: #FF0053;
        --color-text: #444;
        --color-light: #666;
        --color-link: #000;

        --bg-body: #F8F7F3;

        --gap: 16px;

        --container-s: 440px;
        --container-m: 800px;

       
        --size-text-s: 1.6rem;
        --size-text-m: 1.8rem;
        --size-text-l: 2.2rem;
        --size-text-xl: 2.6rem;
        --size-text-xxl: 3.2rem;
        --size-text-default: var(--size-text-m);
        
        --size-lh-s: 1.25;
        --size-lh-l: 1.6;

        --font-default: 'Work Sans', sans-serif;
        --font-fancy: 'Playfair Display', serif;
      }
      
      ::selection {
        background: var(--color-link);
        color: #fff; 
      }
      ::-moz-selection {
        background: var(--color-link);
        color: #fff; 
      }
      html {
        font-size: 52.5%;
        box-sizing: border-box;
        border: var(--gap) solid #F1EFEB;
        min-height: 100vh;
        *, *:after, *:before {
          box-sizing: inherit;
        }
      }
      body {
        background: var(--bg-body);
        color: var(--color-text);
        font-family: var(--font-default);
        margin: 0;
        font-size: var(--size-text-default);
        line-height: var(--size-lh-l);
      }
      a {
        padding-bottom: 2px;
        color: var(--color-link);
        text-decoration: none;
        box-shadow: 0 -5px 0 var(--color-fancy) inset;
        position: relative;
        transition: transform .2s ease-out;
        &:hover {
          top: -2px;
          box-shadow: 0 -2px 0 var(--color-link) inset;
        }
      }
      h1,h2,h3,h4,h5,h6 {
        line-height: var(--size-lh-s);
        margin: 0;
      }
      p {
        margin: 0;
      }
      hr {
        height: 1px;
        border: none;
        background: #ccc;
        margin: 0 0 var(--gap);
      }
      .u-margin-bottom {
        margin-bottom: var(--gap);
      }
      .u-list-plain {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      .u-text-strong {
        font-weight: 700;
      }
      .u-text-center {
        text-align: center;
      }
      @media (min-width: ${bp[0]}) {
        :root {
          --gap: 24px;
        }
        html {
          font-size: 62.5%;
        }
      }

    `;
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
   

    
    return (
      <Fragment>
        <Icons />
        <Global styles={globalStyles} />
        {
          location.pathname !== rootPath &&
          <Box as="header" padding="1">
            <LogoSmall />
          </Box>
          
        }
        
        {children}
      
        <Footer />
      </Fragment>
      
    )
  }
}

export default Layout
