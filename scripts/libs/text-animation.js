document.addEventListener("DOMContentLoaded", function(){
    const el = document.querySelector(".loader-text");
    const str = el.innerHTML.trim().split("");

    el.innerHTML = str.reduce((acc, curr)=>{
        return `${acc}<span class="char">${curr}</span>`
    },"");
});