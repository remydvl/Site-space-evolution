import * as React from 'react'

import Link from 'gatsby-link'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    },
    allFile: any,
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    const data = this.props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter

    return (
      <div>
        <h1>{data.title}</h1>
        <p>{data.intro}</p>
        <img src={data.image} alt='space-evolution logo' />
        <a class="button" href={data.winFile}>Telecharger pour windows</a>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
  }
}

export const cmsQuery = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
              winFile
          }
        }
      }
    }
  }
}`