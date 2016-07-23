# gatsby-starter-drunkenblog
Gatsby starter for creating a blog

Here is a [demo](http://konsumer.js.org/gatsby-starter-drunkenblog/).

I wrote a [blog post](http://blog.jetboystudio.com/articles/gatsby) about it.

Install this starter (assuming Gatsby is installed) by running from your CLI:
`gatsby new gatsby-blog https://github.com/konsumer/gatsby-starter-drunkenblog`

## Running in development
`gatsby develop`

## deploying to gh-pages

If you have a [custom domain](https://help.github.com/articles/using-a-custom-domain-with-github-pages/), put it in `pages/CNAME`. You can deploy to Google Pages with `npm run deploy`.


## configuration

Go edit `config.toml`. Change it to all of your stuff. change `pages/author.png` to your own picture.

### [google analytics](https://analytics.google.com/)
Put your `gaCode` in `config.toml`. If you don't use GA, unset it.

### [disqus](https://disqus.com/)

set your `disqusShortname` in `config.toml`. If you don't use disqus, unset it. This seems a bit flakey right now, so if you want nice fast-loading comments, use komments (below.)

### [komments](https://komments.net)

set your `kommentsCode` in `config.toml`. If you don't use komments, unset it.

## todo

I still have a few things I'd like to do:

* [ ] dynamic generation of all tag pages (instead of full list + hashes)
* [ ] disqus seems a litle flakey. needs more testing.