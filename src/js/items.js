import img1 from '../media/images/1.jpg'
import img2 from '../media/images/2.jpg'
import img3 from '../media/images/3.jpg'
import img4 from '../media/images/4.gif'
import audio1 from '../media/audio/1.mp3'
import audio2 from '../media/audio/2.mp3'
import audio3 from '../media/audio/3.mp3'
import video1 from '../media/video/1.mp4'
import video2 from '../media/video/2.mp4'

import * as types from './mediaTypes'

export const items = [
    {
        src: img1,
        type: types.IMAGE,
        title: 'Золотая осень'
    },
    {
        src: img2,
        type: types.IMAGE,
        title: 'Первый снег'
    },
    {
        src: img3,
        type: types.IMAGE,
        title: 'Дом на реке'
    },
    {
        src: img4,
        type: types.IMAGE,
        title: 'Горы в тумане'
    },
    {
        src: audio1,
        type: types.AUDIO,
        title: 'Восход'
    },
    {
        src: audio2,
        type: types.AUDIO,
        title: 'Ручей'
    },
    {
        src: audio3,
        type: types.AUDIO,
        title: 'Вечерние сверчки'
    },
    {
        src: video1,
        type: types.VIDEO,
        title: 'Never Gonna Give You Up'
    },
    {
        src: video2,
        type: types.VIDEO,
        title: 'Морской прибой'
    }
]
