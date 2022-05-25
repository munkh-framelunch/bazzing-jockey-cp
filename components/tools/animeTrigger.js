/* eslint-disable no-undef */
import getPosition from './position'

const classes =
  'trigger hide-scale hide-down hide-left hide-right hide-up hide-fade hide-fade-up hide-fade-down'

export default function () {
  // eslint-disable-next-line
  const $window = $(window)
  const fixedTop = $('.top-fixed')

  const main = () => {
    $('.trigger').each((index, item) => {
      const current = $(item)
      if (getPosition(current).fromTop < 70) {
        current.removeClass(classes)
      }
    })
    $('.trigger-parent').each((index, item) => {
      const current = $(item)
      if (getPosition(current).fromTop < 50) {
        current.find('.anime').removeClass(classes)
        current.find('.trigger-child').addClass('show')
        current.removeClass('trigger-parent')
      }
    })
    $('.trigger-show').each((index, item) => {
      const current = $(item)
      if (getPosition(current).fromTop < 60) {
        current.addClass('show')
        current.removeClass('trigger-show')
      }
    })
    $('.video-trigger').each((index, item) => {
      const current = $(item)
      current.find('video')[0].play()
      current.removeClass('video-trigger')
    })
    if (!$('#movie')[0]) return
    if ($('#movie').offset().top < $window.scrollTop()) {
      fixedTop.addClass('show')
    } else {
      fixedTop.removeClass('show')
    }
  }
  $window.on('scroll', () => {
    main()
  })
  main()
}
