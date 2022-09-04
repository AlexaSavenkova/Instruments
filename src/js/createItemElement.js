import * as types from './mediaTypes'

const createMediaElement = (item) => {
  let mediaElement
  switch (item.type) {
    case types.IMAGE: {
      mediaElement = document.createElement('img')
      mediaElement.classList.add('gallery-item__img')
      mediaElement.src = item.src
      break
    }
    case types.AUDIO: {
      mediaElement = document.createElement('div')
      const audioElement = document.createElement('audio')
      audioElement.src = item.src
      audioElement.controls = true
      mediaElement.appendChild(audioElement)
      mediaElement.classList.add('gallery-item__audio')
      break
    }
    case types.VIDEO: {
      mediaElement = document.createElement('video')
      mediaElement.src = item.src
      mediaElement.controls = true
      mediaElement.classList.add('gallery-item__video')
      break
    }
  }
  return mediaElement
}

export const createItemElement = (item) => {
  const itemElement = document.createElement('div')
  itemElement.classList.add('gallery-item')

  const titleElement = document.createElement('p')
  titleElement.textContent = item.title
  titleElement.classList.add('gallery-item__title')

  const mediaElement = createMediaElement(item)

  mediaElement.classList.add('gallery-item__media')
  itemElement.appendChild(mediaElement)
  itemElement.appendChild(titleElement)

  return itemElement
}
