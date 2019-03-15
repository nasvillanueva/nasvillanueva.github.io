import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import defaultTo from 'lodash/defaultTo'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import QiitaLink from '../components/QiitaLink'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const postTitle = post.frontmatter.title
    const siteTitle = defaultTo(
      postTitle,
      get(this.props, 'data.site.siteMetadata.title')
    )
    const siteDescription = post.excerpt
    const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl')
    const fbAppId = get(this.props, 'data.site.siteMetadata.fbAppId')
    const twitterUsername = get(
      this.props,
      'data.site.siteMetadata.twitterUsername'
    )
    const { previous, next } = this.props.pageContext
    const qiitaUrl = post.frontmatter.qiitaUrl
    const title = post.frontmatter.title
    const imageUrl = `${siteUrl}/logo.png`
    const meta = [
      {
        name: 'description',
        content: siteDescription,
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:author',
        content: twitterUsername,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: siteDescription,
      },
      {
        name: 'twitter:image',
        content: imageUrl,
      },
      {
        property: 'fb:app_id',
        contentL: fbAppId
      },
      {
        property: 'og:title',
        content: title
      },
      {
        property: 'og:image',
        content: imageUrl
      },
      {
        property: 'og:description',
        content: siteDescription
      },
      {
        property: 'og:type',
        content: 'article'
      }
    ]
    return (
      <Layout location={this.props.location} className={'blog-post'}>
        <Helmet htmlAttributes={{ lang: 'en' }} meta={meta} title={siteTitle} />
        <h1>{postTitle}</h1>

        <div
          className="blog-post-meta"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: rhythm(1),
            marginTop: rhythm(-0.5),
            ...scale(-1 / 5),
          }}
        >
          <span>{post.frontmatter.date}</span>

          <QiitaLink url={qiitaUrl} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
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
        twitterUsername
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        qiitaUrl
      }
    }
  }
`
