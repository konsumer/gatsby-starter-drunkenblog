import React from 'react'

export default class Komments extends React.Component {
  render () {
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        const t = document.createElement('script')
        t.type = 'text/javascript'
        t.async = !0
        t.src = `//komments.net/embed/${this.props.code}`
        this.refs.kmt.appendChild(t)
      }, 0)
    }
    return (<div ref="kmt" id="_kmts"></div>)
  }
}

Komments.propTypes = {
  code: React.PropTypes.string
}
