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
        document.body.classList.toggle("no-scroll");

        if (document.body.classList.contains("no-scroll")) {
            this._disableScroll();
        } else {
            this._enableScroll();
        }
    }

    _disableScroll() {
        document.addEventListener('touchmove', this._noscroll, { passive: false });
        document.addEventListener('wheel', this._noscroll, { passive: false });
    }

    _enableScroll() {
        document.removeEventListener('touchmove', this._noscroll);
        document.removeEventListener('wheel', this._noscroll);
    }

    _noscroll(e) {
        e.preventDefault();
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new MobileMenu();
});
