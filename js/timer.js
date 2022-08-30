import {printTimer, printTimerIsOver} from "./printResult.js";
import {Howl, Howler} from 'howler';

const stopTimer = document.getElementById('stop-timer')
const startTimer = document.getElementById('start-timer')

var sound = new Howl({
    src: ['sound.mp3']
});

function clearTimer(id) {
    clearInterval(id);
    startTimer.disabled = false
    stopTimer.disabled = true
}

function timer(timestamp) {
    startTimer.disabled = true
    stopTimer.disabled = false
    const timerID = setInterval(() => {
        if (timestamp <= 0 ) {
            clearTimer(timerID);
            printTimerIsOver('Time is over')
            sound.play()
        } else {
            const hours = Math.floor(timestamp / 3600)
            const min = Math.floor(timestamp % 3600 / 60)
            const sec = Math.floor(timestamp % 3600 % 60)
            printTimer(hours, min, sec)
        }
        timestamp--
    }, 1000)
    stopTimer.onclick = () => {
        clearTimer(timerID)
    }
}

export default timer
