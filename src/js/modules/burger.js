function handleBurgerClick() {
    const isActive = $(this).hasClass("active");
    $(this).toggleClass("active", !isActive);
    $("#nav-down").toggleClass("active", !isActive);
}

$(function () {
    $(document).on("click", ".js-burger-open", handleBurgerClick);
});
