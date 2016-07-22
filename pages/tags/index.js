import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'

import Summary from 'components/Summary'
import { config } from 'config'
import { tagMap, getTags, getAllTags } from 'utils'
import { prefixLink } from 'gatsby-helpers'

const style = {
  tagLink: {
    color: 'inherit',
    boxShadow: 'none'
  }
}

const TaggedPage = ({page, hideSummary}) => (
  <li>
    <Link to={prefixLink(page.data.path)}>
    {page.data.title}
    </Link>
    {hideSummary ? null : <Summary body={page.data.body} />}
  </li>
)

const ShowTag = ({tag, pages, hideSummary}) => {
  const taggedPages = pages
    .filter(getTags)
    .filter(page => getTags(page).map(tagMap).indexOf(tag) !== -1)
  return (
  <div>
    <h2><Link style={style.tagLink} to={{pathname: prefixLink('/tags/'), hash: '#' + tagMap(tag)}}> {tag} </Link></h2>
    <ul>
      {taggedPages.map((page, i) => (<TaggedPage hideSummary={hideSummary} key={i} page={page} />))}
    </ul>
  </div>
  )
}

class BlogTags extends React.Component {
  render () {
    const tag = this.props.location.hash.replace('#', '')
    const allTags = tag ? [] : getAllTags(this.props.route.pages)
    return (
    <DocumentTitle title={tag ? `${tag} - ${config.blogTitle}` : config.blogTitle}>
      <div>
        {tag ? <ShowTag tag={tag} pages={this.props.route.pages} /> : null}
        {!tag ? allTags.map((tag, i) => <ShowTag
                                          hideSummary={true}
                                          key={i}
                                          tag={tag}
                                          pages={this.props.route.pages} />) : null}
      </div>
    </DocumentTitle>
    )
  }
}

BlogTags.propTypes = {
  route: React.PropTypes.object,
  location: React.PropTypes.object
}

export default BlogTags
