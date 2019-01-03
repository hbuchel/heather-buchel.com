import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { css } from '@emotion/core';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import LogoLarge from '../components/LogoLarge';
import Container from '../components/Container';
import Box from '../components/Box';
import Text from '../components/Text';
import Social from '../components/Social';

import ArticleListItemHome from '../components/ArticleListItemHome';

class BlogIndex extends React.Component {

  

  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    // const posts = data.allMarkdownRemark.edges
    const hero = css`
      margin-top: calc(var(--gap) * 3);
      padding: calc(var(--gap) * 2);
    `;
    const subtitle = css`
      font-family: var(--font-fancy);
      font-weight: 700;
      text-align: center;
      margin-bottom: calc(var(--gap) * 2);
    `;
    
    return (
      <Layout location={this.props.location} title={siteTitle}>
        
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div css={hero}>
          
          <LogoLarge />
          <div css={subtitle}>Design Technologist @ Amazon</div>
          <Bio />
        </div>
        {/* <Box padding="1">
          <Container size="m">
            
            <Box className="u-text-center">
              <Text variant="fancy" as="h2" size="xl" className="u-margin-bottom">Recently, I wrote...</Text>
              <ul className="u-list-plain">
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <ArticleListItemHome key={node.fields.slug} title={title} frontmatter={node.frontmatter} fields={node.fields} />
                  )
                })}
              </ul>
            </Box>
          </Container>
          
        </Box> */}
        <Social />
        
        
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
