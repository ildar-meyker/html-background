// shifting
let shiftCalcs = {};
let $shiftTitle = $();

// counts
let countsState = [];

import { CountUp } from "countup.js";

function handleShift(status) {
    const scrollTop = status.offset.y;

    const isVisible =
        scrollTop + shiftCalcs.windowHeight > shiftCalcs.offsetTop &&
        shiftCalcs.offsetTop + shiftCalcs.blockHeight > scrollTop;

    if (isVisible) {
        const shiftValue =
            (scrollTop + shiftCalcs.windowHeight - shiftCalcs.offsetTop) /
            shiftCalcs.windowHeight;

        $shiftTitle.css(`transform`, `translateX(${100 - 100 * shiftValue}%)`);
    }
}

function handleHeader(status) {
    $("#header").toggleClass("header--hidden", status.offset.y > 10);

    if (status.offset.y < 10) {
        resetCounts();
    }
}

function updateCalcs() {
    shiftCalcs = {
        offsetTop: $shiftTitle.offset().top,
        blockHeight: $shiftTitle.outerHeight(),
        windowHeight: $("#page__window").height(),
    };
}

function resetCounts() {
    countsState.forEach((item) => {
        item.instance.reset();
        item.animated = false;
    });
}

$(function () {
    const scrollbar = Scrollbar.init(document.querySelector("#page__window"), {
        damping: 0.03,
    });

    scrollbar.addListener(handleHeader);

    $shiftTitle = $(".offices__title");

    if ($shiftTitle.length === 0) return;

    updateCalcs();

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    scrollbar.addListener(handleShift);
                } else {
                    scrollbar.removeListener(handleShift);
                }
            });
        },
        {
            rootMargin: "0px 0px 0px 0px",
            threshold: 0,
        }
    );

    observer.observe($shiftTitle[0]);

    $(window).on("resize", updateCalcs);
});

$(function () {
    const $values = $(".counts__value__num");

    $values.each(function () {
        countsState.push({
            target: this,
            instance: new CountUp(this, this.textContent),
            animated: false,
        });
    });

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const number = countsState.filter(
                        (item) => item.target === entry.target
                    )[0];

                    if (number.animated) return;

                    number.instance.start();
                    number.animated = true;
                }
            });
        },
        {
            rootMargin: "0px 0px 0px 0px",
            threshold: 0,
        }
    );

    $values.each(function () {
        observer.observe(this);
    });
});
