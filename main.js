const partyList = document.querySelector(".partyList")
const loadParty = document.querySelector(".loadParty")

let parties = []


async function fetchParties() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events")
    const data = await response.json()
    parties = data.data
    render()
}

async function fetchGuests() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/guests")
    const data = await response.json()
    guests = data.data
    console.log(guests)
}

async function fetchRSVP() {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/rsvps")
    const data = await response.json()
    rsvp = data.data
    console.log(rsvp)
}

function render() {
    const html = parties.map((party, index) => {
        return `
            <h2>${party.name}</h2>
            <p>${party.description}</p>
            <span class="date">${party.date}</span>
            <span class="time">${party.location}</span>
            <br>
        `
    })
    partyList.innerHTML = html.join("")
}

fetchParties()
fetchGuests()
fetchRSVP()