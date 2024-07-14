document.addEventListener("DOMContentLoaded", () => {
    // Headerのクラスの付与
    const header = document.querySelector("header"); 
    const particle = document.getElementById("particles-js");

    const headerObserverCallback = function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.add("hidden");
            } else {
                header.classList.remove("hidden");
            }
        });
    };

    const headerObserver = new IntersectionObserver(headerObserverCallback);
    headerObserver.observe(particle);



    // TextAnimationクラスの定義
    class TextAnimation {
        constructor(el) {
            this.el = el instanceof HTMLElement ? el : document.querySelector(el);
            this.chars = this.el.textContent.trim().split("");
            this.el.innerHTML = this._splitText();
        }

        _splitText() {
            return this.chars.reduce((acc, curr) => {
                return `${acc}<span class="char">${curr}</span>`;
            }, "");
        }
    }

    // animate-titleクラスを持つ全ての要素に対してTextAnimationを適用
    const animatedTitles = document.querySelectorAll('.animate-title');
    animatedTitles.forEach(title => {
        new TextAnimation(title);
    });

    // IntersectionObserverを使用してinviewクラスを付与
    const observerOptions = {
        root: null, // viewportを基準にする
        rootMargin: '0px',
        threshold: 0.1 // 10%見えたら
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('inview');
            } else {
                entry.target.classList.remove('inview');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedTitles.forEach(title => {
        observer.observe(title);
    });
    const coverSlides = document.querySelectorAll('.cover-slide');
    coverSlides.forEach(slide => {
        observer.observe(slide);
    });
});

