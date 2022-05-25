/* eslint-disable no-undef */
export default (videoUrl) => {
  const video = $('#videoModel iframe')
  const model = $('#videoModel')

  const getUrl = (val) =>
    `https://www.youtube.com/embed/${val}?autoplay=1&rel=0&playsinline=1`

  model.fadeIn()
  video.attr('src', getUrl(videoUrl))
  $('body').css({
    overflow: 'hidden',
  })
}
