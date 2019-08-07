import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'

const linkStyles = css`
  text-decoration: none;
  color: #C3C3C3;
`

function Header ({ siteTitle = '' }) {
  return (
    <header>
      <h1>
        <Link
          to='/'
          css={linkStyles}
        >
          {siteTitle}
        </Link>
      </h1>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
