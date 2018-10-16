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
      <a href={url} className={'qiita-link'} style={style} target={'_blank'}>
        日本語訳 (Qiita)
      </a>
    )
  }
}

export default QiitaLink
