const hours = new Date().getHours() // get the current hour
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?


// gets the welcome div and the page title
const welcomeDiv = document.querySelector('#welcome')
const pageTitle = document.title

// sets the welcome message based on the time of day
if (isMorning) {
    welcomeDiv.textContent = `Good morning! Welcome to ${pageTitle}.`
} else if (isAfternoon) {
    welcomeDiv.textContent = `Good afternoon! Welcome to ${pageTitle}.`
} else {
    welcomeDiv.textContent = `Good evening! Welcome to ${pageTitle}.`
}