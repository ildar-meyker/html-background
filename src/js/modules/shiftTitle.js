let calculations = {};
let $element = $();

function handleScroll() {
    const scrollTop = $(window).scrollTop();

    const isVisible =
        scrollTop + calculations.windowHeight > calculations.offsetTop &&
        calculations.offsetTop + calculations.blockHeight > scrollTop;

    if (isVisible) {
        const shiftValue =
            (scrollTop + calculations.windowHeight - calculations.offsetTop) /
            calculations.windowHeight;

        $element.css(`transform`, `translateX(${100 - 100 * shiftValue}%)`);
    }
}

function recalculate() {
    calculations = {
        offsetTop: $element.offset().top,
        blockHeight: $element.outerHeight(),
        windowHeight: $(window).height(),
    };
}

$(function () {
    $element = $(".offices__title");

    if ($element.length === 0) return;

    recalculate();

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    $(window).on("scroll", handleScroll);
                } else {
                    $(window).off("scroll", handleScroll);
                }
            });
        },
        {
            rootMargin: "0px 0px 0px 0px",
            threshold: 0,
        }
    );

    observer.observe($element[0]);

    $(window).on("resize", recalculate);
});
