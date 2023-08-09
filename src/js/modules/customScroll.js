//
$(function () {
    Scrollbar.init(document.querySelector("#window"));

    $(".scroll-area").each(function () {
        Scrollbar.init(this);
    });
});
