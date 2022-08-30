const result = document.getElementById("datecalc__result")
const timer_result = document.getElementById("timer__result")

export const printError = (textErr) => {
  result.innerText = textErr
}

export const printResult = ({ years, months, days }) => {
  result.innerText = `Год: ${years} - Месяц: ${months} - День: ${days}`
}

export const printTimer = (hours, min, sec) => {
  sec = String(sec).padStart(2,'0')
  min = String(min).padStart(2,'0')
  hours = String(hours).padStart(2,'0')
  timer_result.innerText = `${hours} : ${min} : ${sec}`
}

export const printTimerIsOver = (text) => {
  timer_result.innerText = text
}