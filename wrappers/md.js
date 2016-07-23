import React from 'react'
import moment from 'moment'
import DocumentTitle from 'react-document-title'
import { fixLinks } from 'utils'
import Disqus from 'components/Disqus'
import Komments from 'components/Komments'
import { prefixLink } from 'gatsby-helpers'

import ReadNext from 'components/ReadNext'
import Bio from 'components/Bio'
import Tags from 'components/Tags'
import { rhythm } from 'utils/typography'
import { config } from 'config'

import 'css/zenburn.css'
import 'css/article.css'

const style = {
  h1: {
    marginTop: 0
  },
  hr: {
    marginBottom: rhythm(2)
  },
  Tags: {
    marginBottom: rhythm(1)
  },
  date: {
    marginBottom: rhythm(1 / 2),
    fontSize: rhythm(1 / 2),
    color: 'gray'
  }
}

class MarkdownWrapper extends React.Component {
  componentDidMount () {
    fixLinks(this.refs.markdown, this.context.router)
  }

  render () {
    const { route } = this.props
    const post = route.page.data

    return (
    <DocumentTitle title={post.title ? `${post.title} | ${config.blogTitle}` : config.blogTitle}>
      <div className="markdown">
        <h1 style={style.h1}>{post.title}</h1>
        {!post.date ? null : <div style={style.date}>
                               {`Posted ${moment(post.date).calendar().toLowerCase()}`}
                             </div>}
        <Tags post={post} style={style.Tags} />
        <div className="article" ref="markdown" dangerouslySetInnerHTML={{__html: post.body}} />
        <hr style={style.hr} />
        <ReadNext post={post} pages={route.pages} />
        <Bio />
        {config.disqusShortname ? <Disqus
                                    shortname={config.disqusShortname}
                                    title={post.title}
                                    identifier={route.page.path}
                                    url={`${config.blogUrl}${prefixLink(route.page.path)}`} /> : null}
        {config.kommentsCode ? <Komments code={config.kommentsCode} /> : null}
      </div>
    </DocumentTitle>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
}

MarkdownWrapper.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MarkdownWrapper
