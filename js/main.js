import '/css/style.css'
import javascriptLogo from '/images/javascript.svg'
import viteLogo from '/images/vite.svg'
import { setupCounter } from '/js/counter.js'
import dayjs from 'dayjs'

const date1 = dayjs('Oct 30, 2023')
const date2 = dayjs('Sept 5, 2023')

//Difference in days
let df = date1.diff(date2, "day");
console.log(df);

console.log(dayjs().format('MMM. D, YYYY'));

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="bg-slate-50">Hello Vite!</h1>
    <h2>Today's date: ${date1}</h2>
    <h2>Fall 2023 Semester start date: ${date2}</h2>
    <h2>Number of days since the program started: ${df} days</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
