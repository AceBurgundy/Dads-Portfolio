import Services from "./classes/Services.js"
import Contact from "./classes/Contact.js"
import About from "./classes/About.js"
import Home from "./classes/Home.js"

export const getById = tag => document.getElementById(tag) 
export const queryElement = tag => document.querySelector(tag) 
export const queryElements = tag => document.querySelectorAll(tag) 

const navItemIds = Array.from(getById("nav-items").children).map(item => item.id.split('-')[2])

export const transition = (pageClass) => {

    const page = new pageClass()

    if (navItemIds.includes(page.rootId)) {
        page.load()
    }
}

export const getPerson = async () => {
    const response = await fetch("./assets/data.json")
    return await response.json()
}