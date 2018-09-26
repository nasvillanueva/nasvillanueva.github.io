import React from 'react'
import { Link } from 'gatsby'
import isEmpty from 'lodash/isEmpty'

import './qiita-link.less'

class QiitaLink extends React.Component {
  render() {
    const { url, style } = this.props

    if (isEmpty(url)) {
      return ''
    }

    return (
      <Link to={url} className={'qiita-link'} style={style}>
        日本語で (Qiita)
      </Link>
    )
  }
}

export default QiitaLink
