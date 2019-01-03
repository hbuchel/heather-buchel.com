import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import Text from '../components/Text';
import Icon from '../components/Icon';

const articleHome = css`
  margin-bottom: var(--gap);
`

const articleHomeInner = css`
  display: flex;
  justify-content: center;
`

const articleIcon = css`
  margin: calc(var(--gap)/4) calc(var(--gap)/3) 0 0;
`

const ArticleListItemHome = ({title, frontmatter, fields}) => {
  return(
    <li css={articleHome}>
      <span css={articleHomeInner}>
        {
          frontmatter.external && frontmatter.external.indexOf('medium.com') &&
          <Icon name="medium" width="20px" css={articleIcon} />
        }
        <span>
        {
          frontmatter.external &&
          <a href={frontmatter.external} target="_blank" rel="noopener">
            <Text as="span" size="l" lh="s" className="u-margin-bottom u-text-strong">{title}</Text>
          </a>
        }
        {
          !frontmatter.external &&
          <Link to={fields.slug}>
            <Text as="span" size="l" lh="s" className="u-margin-bottom u-text-strong">{title}</Text>
          </Link>
        }
        
        <Text size="s" as="div" color="light">{frontmatter.date}</Text>
        </span>
      </span>
      
      
      
    </li>
  )
}

export default ArticleListItemHome;