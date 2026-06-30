/* ==========================================================
   PORTAL EMS BRASIL
   SCRIPT.JS
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 800);

    }, 1800);

});



/* ==========================================================
   BOTÃO VOLTAR AO TOPO
========================================================== */

const backButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        backButton.style.display = "block";

    } else {

        backButton.style.display = "none";

    }

});

backButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==========================================================
   TIMELINE
========================================================== */

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateY(-8px) scale(1.03)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "";

    });

});





/* ==========================================================
   PORTAL CARDS
========================================================== */

const portalCards = document.querySelectorAll(".portal-card");

portalCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});





/* ==========================================================
   BOTÃO ENTRAR NO PORTAL
========================================================== */

const portalButton = document.querySelector(".portal-button");

if (portalButton) {

    portalButton.addEventListener("click", function () {

        console.log("Entrando no Portal EMS Brasil");

    });

}


/* ==========================================================
   MODAIS
========================================================== */

const chapterCards = document.querySelectorAll(".chapter-card");

chapterCards.forEach((card) => {

    card.addEventListener("click", function () {

        const modalId = this.dataset.modal;

        const modal = document.getElementById(modalId);

        if (modal) {

            modal.classList.add("active");

        }

    });

});





const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {

            modal.classList.remove("active");

        }

    });

});





/* ==========================================================
   FECHAR MODAIS COM ESC
========================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        modals.forEach((modal) => {

            modal.classList.remove("active");

        });

    }

});





/* ==========================================================
   EFEITO DE ENTRADA
========================================================== */

const heroContent = document.querySelector(".hero-content");

if (heroContent) {

    heroContent.style.opacity = "0";

    heroContent.style.transform = "translateY(40px)";

    setTimeout(() => {

        heroContent.style.transition = "all .9s ease";

        heroContent.style.opacity = "1";

        heroContent.style.transform = "translateY(0)";

    }, 2000);

}


/* ==========================================================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================================================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(

    ".chapter-card, .portal-card, .intro-section, .transition-section"

).forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});





/* ==========================================================
   PLACEHOLDERS DOS MODAIS
========================================================== */

const modalTexts = {

    modalSobrevivencia:
        "Durante milhares de anos, o movimento era indispensável para sobreviver.",

    modalTrabalho:
        "O trabalho físico moldou a evolução da humanidade.",

    modalConstrucao:
        "Construções monumentais foram erguidas pela força do corpo humano.",

    modalIndustria:
        "A tecnologia reduziu o esforço físico e aumentou a produtividade.",

    modalTreino:
        "O exercício passou a ser uma escolha consciente para manter a saúde.",

    modalRotina:
        "A rotina moderna trouxe conforto, mas reduziu nossa movimentação.",

    modalTempo:
        "Hoje, um dos maiores desafios é encontrar tempo para cuidar do corpo.",

    modalWBEMS:
        "O WB-EMS representa um novo capítulo da evolução do movimento humano."

};

console.log("Portal EMS Brasil carregado com sucesso.");