/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

import Header from './header'

const Main = styled.main`
  background-color: 'black';
`

const Wrapper = styled.div`
  padding: 1rem 3rem;
`

const globalStyles = css`
  body {
    background: #232323;
    color: #F2F2F2;
  }
`

function Layout ({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Global styles={globalStyles} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
