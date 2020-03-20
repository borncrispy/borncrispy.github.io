$(".touch").mouseenter(function () {

    $(this).animate({
        top: Math.random() * 300
    }, 100);
    $(this).animate({
        left: Math.random() * 300
    }, 100);
});