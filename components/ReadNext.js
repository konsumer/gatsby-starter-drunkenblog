import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { prune, include as includes } from 'underscore.string'
import find from 'lodash/find'
import intersect from 'just-intersect'
import { rhythm, scale } from 'utils/typography'
import { getTags } from 'utils'
import Summary from 'components/Summary'

const style = {
  h6: {
    margin: 0,
    fontSize: scale(-0.5).fontSize,
    lineHeight: scale(-0.5).lineHeight,
    letterSpacing: -0.25
  },
  h3: {
    marginTop: 0,
    marginBottom: rhythm(1 / 4)
  }
}

class ReadNext extends React.Component {
  render () {
    const { pages, post } = this.props
    let { readNext } = post
    let nextPost

    if (readNext) {
      nextPost = find(pages, (page) => includes(page.path, readNext))
    }else {
      readNext = pages
        .filter(p => p.data.tags && p.data.body !== post.body)
        .map(p => {
          if (post.tags) {
            const t = getTags(p)
            p.diff = intersect(post.tags, t).length
          }
          return p
        })
        .sort((a, b) => a.diff - b.diff)
        .slice(-5)
        .sort((a, b) => Math.random() * -0.5)
        .pop()
      if (readNext) {
        readNext = readNext.path
        nextPost = find(pages, (page) => includes(page.path, readNext))
      }
    }

    if (!nextPost) {
      return React.createElement('noscript', null)
    } else {
      nextPost = find(pages, (page) => includes(page.path, readNext.slice(1, -1))
      )

      return (
      <div>
        <h6 style={style.h6}>READ THIS NEXT:</h6>
        <h3 style={style.h3}><Link to={{  pathname: prefixLink(nextPost.path)}} > {nextPost.data.title} </Link></h3>
        <Summary body={nextPost.data.body} />
        <hr />
      </div>
      )
    }
  }
}

ReadNext.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array
}

export default ReadNext
