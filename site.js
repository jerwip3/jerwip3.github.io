// You are going to send me a "secret" message, using localStorage. Modify your site.js file so that when it runs, it adds a message to localStorage. The message should be a string, and it can be anything you want. It could be a simple message, or a joke, or a quote, or anything else you want me to see.

// You must use the key It's a secret to everybody.. It must be spelled exactly like that, with the same capitalization and punctuation. If not, my code won't be able to find it. If I can't find it, you'll get a zero score, and a comment that says, "Message not received. Try again."

// 500 brownie points if you your message is a reference to something related to that key.




const hours = new Date().getHours() // get the current hour
const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?


// gets the welcome div and the page title
const welcomeDiv = document.querySelector('#welcome')
const pageTitle = document.title

// sets the welcome message based on the time of day
if (isMorning) welcomeDiv.textContent = `Good morning! Welcome to ${pageTitle}.`
else if (isAfternoon) welcomeDiv.textContent = `Good afternoon! Welcome to ${pageTitle}.`
else welcomeDiv.textContent = `Good evening! Welcome to ${pageTitle}.`

localStorage.setItem("It's a secret to everybody.", "It's dangerous to go alone!")