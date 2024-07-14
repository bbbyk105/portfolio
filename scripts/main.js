// entry.isIntersecting: 要素がビュー内に入っているかどうかを示すプロパティ。
// trueの場合、要素はビュー内にある。


document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const particle = document.getElementById("particles-js");

        const cb = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    header.classList.add("hidden");
                } else {
                    header.classList.remove("hidden");
                }
            });
        };

        const io = new IntersectionObserver(cb);
        io.observe(particle);

});
