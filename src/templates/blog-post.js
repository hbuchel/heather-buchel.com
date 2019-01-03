import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core';

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Container from '../components/Container';
import Icon from '../components/Icon';
import bp from '../util/breakpoints';
import Text from '../components/Text';
import Box from '../components/Box';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const postTitle = css`
      margin: 0 var(--gap);
      font-weight: 700;
      text-align: center;
      font-size: 9vw;
      @media (min-width: ${bp[1]}) {
        font-size: 5vw;
      }
    `;
    const postDate = css`
      text-align: center;
      margin: 0 0 var(--gap);
    `;

    const postExternal = css`
      display: flex;
      padding: var(--gap);
      box-shadow: none;
      border: 3px solid var(--color-fancy);
      &:hover {
        box-shadow: none;
        background: var(--color-link);
        color: #fff;
        border-color: var(--color-link);
      }
    `;

    const postContent = css`
      p {
        margin: var(--gap) 0;
      }
      h2 {
        font-size: var(--size-text-xxl);
      }
      h3 {
        font-size: var(--size-text-xl);
      }
      h4 {
        font-size: var(--size-text-l);
      }
      h5 {
        font-size: var(--size-text-default);
      }
      h6 {
        font-size: var(--size-text-s);
        text-transform: uppercase;
      }
    `;
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <Box padding="1">
          <Container size="m">
            <h1 css={postTitle}>{post.frontmatter.title}</h1>
            <div css={postDate}>
              <Text size="s" as="div" color="light">{post.frontmatter.date}</Text>
            </div>

            <div css={postContent} dangerouslySetInnerHTML={{ __html: post.html }} />

            {
              post.frontmatter.external &&
              <a href={post.frontmatter.external} css={postExternal}>
                <Icon name="medium" width="28px" css={{'marginRight':'calc(var(--gap)/3)'}}/>
                <div css={{'marginRight':'calc(var(--gap)/3)'}}>Read this post on</div>
                {
                  post.frontmatter.external.indexOf('medium.com') &&
                  `Medium` 
                } 
                <Icon name="arrow-right" width="28px" css={{'marginLeft':'auto'}}/>
              </a>

            }
            <hr/>
            <Bio />

            <ul>
              <li>
                {
                  previous &&
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                }
              </li>
              <li>
                {
                  next &&
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                }
              </li>
            </ul>
          </Container>
        </Box>
        
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        external
      }
    }
  }
`
