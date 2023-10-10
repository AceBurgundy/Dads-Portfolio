import { getById, getPerson } from "../helper.js";

export default class Super {

    constructor(rootId, template = '') {
        this.rootId = rootId;
        this.template = template;
        this.content = getById("content");
        this.contentClassList = content.children.length <= 0 ? null : content.firstElementChild.classList
    }

    async loadPerson() {
        return await getPerson()
    }

    load() {
        
        if (!this.contentClassList) {
            console.warn("Content has no children")
        }

        if (this.template.trim() === '') {
            console.error("Cannot find template for " + this.rootId)
            return
        }

        if (this.contentClassList) {
            this.contentClassList.remove("show");
        }
        
        setTimeout(() => {
            this.content.innerHTML = this.template;
            this.contentClassList = this.content.firstElementChild.classList
            this.loadScripts();
            this.contentClassList.add("show");
        }, 300);

    }

    loadScripts() {
        setTimeout(() => {
            console.log(this.rootId + " has now loaded");
        }, 0);
    }
}
