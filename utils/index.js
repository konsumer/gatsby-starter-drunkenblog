import catchLinks from 'catch-links'
import slugify from 'slugify'
import uniq from 'lodash/uniq'

// update internal links to use router
export function fixLinks (ref, router) {
  catchLinks(ref, (href) => {
    const ext = href.split('.').pop().toLowerCase()
    if (['zip', 'png', 'jpg', 'txt', 'md'].indexOf(ext) === -1) {
      router.push(href)
    }
  })
}

// use in tags.map to get proper array of all tags
export function tagMap (tag) {
  return slugify(tag).toLowerCase()
}

// use in pages.map to get tags from a page
export function getTags (page) {
  return page.data.tags || []
}

// get every tag from pages
export function getAllTags (pages) {
  return uniq([].concat.apply([], pages.map(page => getTags(page).map(tagMap)))).sort()
}
