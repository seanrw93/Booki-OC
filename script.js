const links = document.querySelectorAll(".nav-link__item > a")

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(otherLink => {
            otherLink.classList.remove("active")
        })
        link.classList.add("active")
    })
})