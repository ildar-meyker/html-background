$(function () {
    $("#header").addClass("header--active");

    setTimeout(() => {
        $(".intro__title > div > div").addClass("active");
    }, 500);

    setTimeout(() => {
        $(".intro__btn").addClass("active");
    }, 1500);

    setTimeout(() => {
        $(".counts__about").addClass("active");
    }, 1500);

    setTimeout(() => {
        $(".intro__desc").addClass("active");
    }, 1800);
});
