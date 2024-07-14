class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector(".mobile-menu__btn");
        this.DOM.cover = document.querySelector(".mobile-menu__cover");
        this.DOM.container = document.querySelector("#content");
        this.DOM.mobile = document.querySelector(".mobile-menu__main");

        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? "touchstart" : "click";
    }

    _toggle() {
        this.DOM.container.classList.toggle("menu-open");
        this.DOM.mobile.classList.toggle("visible");
    }

    

    _addEvent() {
        this.DOM.btn.addEventListener("click", this._toggle.bind(this));
        this.DOM.cover.addEventListener("click", this._toggle.bind(this));

    }
}

new MobileMenu();