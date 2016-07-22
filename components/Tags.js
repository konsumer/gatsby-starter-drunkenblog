import React from 'react'
import {Link} from 'react-router'
import {tagMap} from 'utils'

const Tags = props => {
  const { post, ...rest } = props
  return (
    <div className="Tags" {...rest}>
      {(props.post.tags || []).map((tag, i) => {
         return [i !== 0 ? ' | ' : null,
           <Link key={i} to={{pathname:'/tags/', hash: '#'+tagMap(tag)}}>
             {tag}
           </Link>]
       })}
    </div>
  )
}

export default Tags
