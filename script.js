import { getById, getPerson, transition } from "./helper.js";

import Services from "./classes/Services.js"
import Contact from "./classes/Contact.js"
import About from "./classes/About.js"
import Home from "./classes/Home.js"

const setActive = itemIdForActive => Array.from(getById("nav-items").children).map(item => {
    if (item.id === itemIdForActive) {
        item.classList.add("active")
    } else {
        item.classList.remove("active")
    }
})

window.onclick = event => {

    const elementId = event.target.id

    if (elementId === "nav-items-home") {
        transition(Home)
        setActive(elementId)
    }
    
    if (elementId === "nav-items-about") {
        transition(About)
        setActive(elementId)
    }
    
    if (elementId === "nav-items-services") {
        transition(Services)
        setActive(elementId)
    }
    
    if (elementId === "nav-items-contact") {
        transition(Contact)
        setActive(elementId)
    }
    
}

transition(Home)
setActive("nav-items-home")
