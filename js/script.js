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

    // 클릭스크롤
    const navbar = document.querySelectorAll(".header-right > div");
    const goPortfolio = document.querySelector(".vmw");

    navbar.forEach((navbarItem) =>
        navbarItem.addEventListener("click", (e) => {
            console.log(e.currentTarget.dataset.link);
            link = e.currentTarget.dataset.link;
            scrollIntoView(link);
        })
    );

    goPortfolio.addEventListener("click", () => {
        scrollIntoView(goPortfolio.dataset.link);
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

    // // 스크롤 이동 함수
    function scrollIntoView(selector) {
        const scrollTo = document.querySelector(selector);
        scrollTo.scrollIntoView({ behavior: "smooth" });
    }

    // // 위로가기 스크롤바 구현
    // const gotop = document.querySelector(".gotop");
    // document.addEventListener("click", (e) => {
    //     console.log(e.target);
    //     e.currentTarget.scrollTo({
    //         top: 100,
    //         left: 100,
    //         behavior: "smooth",
    //     });
    // });
    // // footer 의 상단 위치 픽셀값 파악.
    // let waypoint_footer = new Waypoint({
    //     element: document.querySelector(".footer"),
    //     handler: function (direction) {
    //         // console.log(direction);
    //         if (direction === "down") {
    //             gotop.classList.add("active-footer");
    //         } else {
    //             gotop.classList.remove("active-footer");
    //         }
    //     },
    //     offset: "95%",
    // });

    // let waypoint_service = new Waypoint({
    //     element: document.querySelector(".visual"),
    //     handler: function (direction) {
    //         // console.log(direction);
    //         if (direction === "down") {
    //             gotop.classList.add("active");
    //         } else {
    //             gotop.classList.remove("active");
    //         }
    //     },
    //     offset: "80%",
    // });
};
