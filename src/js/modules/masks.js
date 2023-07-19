$(function () {
    $(".js-phone").each(function () {
        IMask(this, {
            mask: "+{7}(000)000-00-00",
        });
    });
});
