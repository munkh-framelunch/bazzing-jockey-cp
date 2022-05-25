/* eslint-disable no-undef */
export default function getPosition($item) {
  const $window = $(window)
  const top = $item.offset().top; //eslint-disable-line
  const bottom = top + ($item.height() - 10)
  const windowTop = $window.scrollTop()
  const windowBottom = windowTop + $window.height()
  let pos = -1 // dotor baigaa uguig iltgene
  let fromTop = 101
  let percentTop = 101
  if (windowBottom > top) {
    if (windowTop > bottom) {
      pos = 1
    } else {
      pos = 0
      if (top > windowTop) {
        fromTop = Math.round(((top - windowTop) / $window.height()) * 100)
      } else {
        fromTop = -1
      }
    }
    const topLimit = windowTop - $item.height()
    if (top > topLimit) {
      percentTop = Math.round(
        ((top - topLimit) / ($window.height() + $item.height())) * 100
      )
    } else {
      percentTop = -1
    }
  }
  return {
    pos,
    fromTop,
    percentTop,
  }
}
