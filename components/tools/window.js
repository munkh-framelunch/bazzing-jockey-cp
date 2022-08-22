/* eslint-disable no-undef */
export default function scrollTo(target) {
  const rect = target.getBoundingClientRect()
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const targetTop = rect.top + scrollTop
  window.scrollTo({
    top: targetTop,
    behavior: 'smooth',
  })
}

export function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export function pageLoadedAnchor(hash) {
  const images = document.querySelectorAll('img')
  const imageLength = images.length
  let loadCnt = 0
  images.forEach((value) => {
    const image = new Image()
    image.onload = () => {
      loadComplete()
    }
    image.onerror = () => {
      loadComplete()
    }
    image.src = value.getAttribute('src')
  })

  function loadComplete() {
    loadCnt += 1
    if (loadCnt >= imageLength) {
      const target = document.querySelector(`${hash}`)
      if (target) {
        scrollTo(target)
      }
    }
  }
}
