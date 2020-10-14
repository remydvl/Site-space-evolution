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
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <div>
        <h1>Space Evolution</h1>

        <p>Space évolution et un jeu qui se joue en quatre parties
          le jeu débute en mode shoot them up se poursuit en tower defense
          continue en fps pour se terminer comme il a commencé.
        </p>

        <p>Space évolution à été conçu intégralement en langage python
          par Ros Billy et Duval Rémy, sa conception à débuter le 21/09/20.
          </p>

        <p>Dans ce jeu comme dans la plupart des autre la difficulté augmente progressivement
          mais ce qui le différencie des autres c'est son changement de gameplay.
        </p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
