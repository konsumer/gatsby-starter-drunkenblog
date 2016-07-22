import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

const style = {
  img: {
    float: 'left',
    marginRight: rhythm(1 / 4),
    marginBottom: 0,
    width: rhythm(2),
    height: rhythm(2)
  },
  p: {
    marginBottom: rhythm(2.5)
  }
}

const Bio = props => (
  <p style={style.p}>
    <img src={prefixLink('/author.png')} alt={config.authorName} style={style.img} /><span dangerouslySetInnerHTML={{__html: config.authorBio}} />
  </p>
)

export default Bio
