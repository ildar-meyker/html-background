// shifting
let shiftCalcs = {};
let $shiftTitle = $();
let scrollbar = null;

// counts
let countsState = [];

import { CountUp } from "countup.js";

function handleShift(status) {
    const scrollTop = scrollbar
        ? status.offset.y
        : $(".page__window").scrollTop();

    const offsetTop = $shiftTitle.offset().top;
    const windowHeight = $(window).height();

    const isVisible =
        offsetTop + $shiftTitle.outerHeight() > 0 && offsetTop < windowHeight;

    if (isVisible) {
        const shiftValue = (windowHeight - offsetTop) / windowHeight;

        $shiftTitle.css(`transform`, `translateX(${100 - 100 * shiftValue}%)`);
    }
}

function handleHeader(status) {
    const scrollTop = scrollbar
        ? status.offset.y
        : $(".page__window").scrollTop();

    $("#header").toggleClass("header--hidden", scrollTop > 10);

    if (scrollTop < 10) {
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
    if (!Modernizr.touchevents) {
        scrollbar = Scrollbar.init(document.querySelector("#page__window"), {
            damping: 0.03,
        });

        scrollbar.addListener(handleHeader);
    } else {
        $(".page__window").on("scroll", handleHeader);
    }

    $shiftTitle = $(".offices__title");

    if ($shiftTitle.length === 0) return;

    updateCalcs();

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!Modernizr.touchevents) {
                    if (entry.isIntersecting) {
                        scrollbar.addListener(handleShift);
                    } else {
                        scrollbar.removeListener(handleShift);
                    }
                } else {
                    if (entry.isIntersecting) {
                        $(".page__window").on("scroll", handleShift);
                    } else {
                        $(".page__window").off("scroll", handleShift);
                    }
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
