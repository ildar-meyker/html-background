let timer = null;
let $activePanel = $();
let $activeItem = $();

function closePanel() {
    $activePanel.removeClass("active");
    $activeItem.removeClass("active");
}

$(".js-submenu-item").on("mouseenter", function () {
    clearTimeout(timer);
    closePanel();
    const target = $(this).data("submenu");
    if (!target) return;
    $activePanel = $("#" + target);
    $activeItem = $(this);
    $activePanel.addClass("active");
    $activeItem.addClass("active");
});

$(".js-submenu-item").on("mouseleave", function () {
    timer = setTimeout(closePanel, 200);
});

$(".js-submenu").on("mouseenter", function () {
    clearTimeout(timer);
});

$(".js-submenu").on("mouseleave", function () {
    timer = setTimeout(closePanel, 200);
});
