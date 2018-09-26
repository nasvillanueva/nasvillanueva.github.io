import React from 'react'
import { Link } from 'gatsby'

import Title from '../Title'
import { rhythm, scale } from '../../utils/typography'
import './layout.less'

class Layout extends React.Component {
  render() {
    const { location, children, className: pageClass } = this.props
    const isRootPath = `${__PATH_PREFIX__}/` === location.pathname

    const headerDefinition = isRootPath
      ? {
          type: 'h1',
          style: {
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          },
        }
      : {
          type: 'h3',
          style: {
            marginTop: 0,
            marginBottom: rhythm(-1),
          },
        }

    const header = React.createElement(
      headerDefinition.type,
      {
        className: 'layout-header',
        style: headerDefinition.style,
      },
      [
        <Link className={'link'} to={'/'} key={1}>
          <Title />
        </Link>,
      ]
    )

    return (
      <div
        className={['layout', pageClass].join(' ')}
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
