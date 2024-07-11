
$(".openNav").click(function () {
    $("#leftMenu").animate({ width: '250px' }, 50)
    $("#home-content").animate({ marginLeft: '250px' }, 50)
})

$(".closebtn").click(function () {
    $("#leftMenu").animate({ width: '0px' }, 50)
    $("#home-content").animate({ marginLeft: '0px' }, 50)
})

$("#leftMenu a").click(function () {
    var sectionId = $(this).attr("href");
    var positionOfSection = $(sectionId).offset().top;
    $("html , body").animate({ scrollTop: positionOfSection }, 2000);
})
/*==============================================================================================================*/

$('#slider .toggle').click(function () {
    $(this).next().slideToggle(500);
    $('.content').not($(this).next()).slideUp(500);
});
/*====================================================================================================================*/

$(document).ready (function () {
    countDownToTime("10 october 2024 12:00:00");
})

function countDownToTime(countTo) {

    let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime() / 1000);

    let currentDate = new Date();
    currentDate = (currentDate.getTime() / 1000);

    let timeDifference = (futureDate - currentDate);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $('.seconds').html(`${secs} s`)

    setInterval(function () { countDownToTime(countTo); }, 1000);
}
/*=================================================================================================================*/

var maxLength = 100;
$('textarea').keyup(function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
        $("#chars").text("your available character finished");
    }
    else {
        $("#chars").text(AmountLeft);
    }
});



































