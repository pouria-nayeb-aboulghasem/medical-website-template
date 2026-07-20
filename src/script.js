const menu = document.querySelector("#menu"),
    closeMobileMenu = document.querySelector("#close-mobile-menu"),
    openMobileMenu = document.querySelector("#open-mobile-menu");

closeMobileMenu.addEventListener("click", () => {
    menu.classList.remove("active");
});

openMobileMenu.addEventListener("click", () => {
    menu.classList.add("active");
});

const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
});

// active links

const sections = document.querySelectorAll('[data-section]');

window.addEventListener('scroll', () => {
    let scrollDown = window.scrollY;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector(`#menu a[href*=${sectionId}]`);

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
});