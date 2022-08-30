import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import toggleBlock from "./toggleBlock.js";
import timer from "./timer.js";

const calcBlock = document.getElementById("datecalc")
const timerBlock = document.getElementById("timer-block")
const toggleBtn = document.getElementById("toggle-btn")
const btnTextCalc ='Go to Timer'
const btnTextTimer ='Go to Date Calculator'

calcBlock.classList.add('hidden')
toggleBtn.innerText = btnTextTimer

toggleBtn.onclick = () => toggleBlock(calcBlock,timerBlock,toggleBtn, btnTextCalc, btnTextTimer)

const startTimer = document.getElementById('start-timer')

startTimer.onclick = () => {
  const hours = +document.getElementById('hours').value
  const min = +document.getElementById('min').value
  const sec = +document.getElementById('sec').value
  const timestamp = hours * 3600 + min * 60 + sec

  timer(timestamp)
}

calcBlock.onsubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target)

  const firstDate = formData.get('firstDate')
  const secondDate = formData.get('secondDate')

  if (!firstDate || !secondDate) {
    printError('Oooppppss -> put date')
  } else {
    const dateDiff = getDateDiff(firstDate, secondDate)

    printResult(dateDiff)
  }
}

