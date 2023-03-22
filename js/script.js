window.onload = function () {
    // 스크롤 기능
    // 스크롤바의 상단위치
    let scy = 0;
    let scActive = 50;
    scy = window.document.documentElement.scrollTop;

    let header = document.querySelector(".header");

    header.addEventListener("mouseenter", function () {
        header.classList.add("header-active");
    });
    header.addEventListener("mouseleave", function () {
        if (scy < scActive) {
            header.classList.remove("header-active");
        }
    });

    // 새로고침 시
    if (scy > scActive) {
        header.classList.add("header-active");
    }

    window.addEventListener("scroll", function () {
        scy = window.document.documentElement.scrollTop;
        // console.log("스크롤 : " + scy);
        if (scy > scActive) {
            header.classList.add("header-active");
        } else {
            header.classList.remove("header-active");
        }
    });

    // 비주얼 슬라이드 기능
    const swiper = new Swiper(".swVisual", {
        loop: true,
        // slidesPerView: 1,
        // spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 상태바
    const animatedProgressSpans = document.querySelectorAll(".animated-progress span");
    animatedProgressSpans.forEach(function (span) {
        const dataProgress = span.getAttribute("data-progress");
        span.style.width = dataProgress + "%";
        span.textContent = dataProgress + "%";
        const duration = 1000; // 1초
        const start = performance.now();
        const end = start + duration;

        function animate() {
            // 시작할 떄의 시점 performance.now()
            const now = performance.now();
            const timeFraction = (now - start) / duration;
            if (timeFraction > 1) {
                span.style.width = dataProgress + "%";
                return;
            }
            const progress = timeFraction;
            span.style.width = progress * dataProgress + "%";

            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    });
};
