import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import 'font-awesome/css/font-awesome.min.css'

import { rhythm } from '../../utils/typography'
import logo from './logo.png'
import './bio.less'

class Index extends React.Component {
  render() {
    return (
      <div
        className={'bio-container'}
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={logo}
          width={rhythm(2)}
          height={rhythm(2)}
          alt={'Spinning Logo'}
          className={'spinning-logo'}
          style={{
            width: rhythm(2),
            height: rhythm(2),
          }}
        />

        <div className={'bio'}>
          <div
            style={{
              marginBottom: rhythm(0.2),
            }}
          >
            From the Philippines, living in Tokyo, Japan. Makes
            <a href="https://plat.io" target={'_blank'}>
              {' '}
              cool stuff{' '}
            </a>{' '}
            at
            <a href="https://infoteria.com" target={'_blank'}>
              {' '}
              Infoteria{' '}
            </a>{' '}
            as a Software Developer.
          </div>

          <div className={'sns'}>
            <a href="mailto:hi@nasvillanueva.com" target={'_blank'}>
              <i className={'fa fa-envelope'} />
            </a>
            <a href="https://github.com/nasvillanueva" target={'_blank'}>
              <i className={'fa fa-github-square'} />
            </a>
            <a
              href="https://www.linkedin.com/in/nasvillanueva/"
              target={'_blank'}
            >
              <i className={'fa fa-linkedin-square'} />
            </a>
            <a href="https://fb.com/nasvillanueva" target={'_blank'}>
              <i className={'fa fa-facebook-square'} />
            </a>
            <a href="https://twitter.com/nasvillanueva_" target={'_blank'}>
              <i className={'fa fa-twitter-square'} />
            </a>
            <a
              href="https://www.instagram.com/nasvillanueva/"
              target={'_blank'}
            >
              <i className={'fa fa-instagram'} />
            </a>
            <a href="https://soundcloud.com/nasvillanueva" target={'_blank'}>
              <i className={'fa fa-soundcloud'} />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
