
window.addEventListener('load', function () {
    sidecontanerlfet = $(".sidebarContaner").css('left')
    sidebarcontnatWidth = $(".sidbarcontent").innerWidth()
    $(".sidebarContaner").animate({ left: -sidebarcontnatWidth })


})



$('#x').click(function () {
    sidecontanerlfet = $(".sidebarContaner").css('left')
    sidebarcontnatWidth = $(".sidbarcontent").innerWidth()
    $(".sidebarContaner").animate({ left: -sidebarcontnatWidth })
})
// the left navbar 
$(".sidebaricon").click(function () {

    console.log("true")
    sidecontanerlfet = $(".sidebarContaner").css('left')
    sidebarcontnatWidth = $(".sidbarcontent").innerWidth()
    $('.sidbarcontent').removeClass("d-none");
    if (sidecontanerlfet == "0px") {
        $(".sidebarContaner").animate({ left: -sidebarcontnatWidth })
    } else {
        $(".sidebarContaner").animate({ left: 0 })
    }



})

window.addEventListener('scroll', function () {
    console.log(window.scrollY)
    if (window.scrollY > 500) {
        console.log("lol")
        $('#buttonfile').addClass("invisible");
    } else {
        $('#buttonfile').removeClass("invisible");
    }
})

//  question control 
$('.SomeQustion h2').click(function (e) {
    $(e.target).next().toggle(100)
})

// timer countdowen
setInterval(function () {

    let countDownDate = new Date("aug 29, 2023 16:37:52").getTime();
    let now = new Date()
    let timeleft = countDownDate - now
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    $(".Timer .row #day").html(days + " D")
    if (days < 10) {
        $(".Timer .row #day").html("0" + days + " D")
    } else {
        $(".Timer .row #day").html(days + " D")
    }

    if (hours < 10) {
        $(".Timer .row #hour").html("0" + hours + " H")
    } else {
        $(".Timer .row #hour").html(hours + " H")
    }
    if (minutes < 10) {
        $(".Timer .row #mints").html("0" + minutes + " M")
    } else {
        $(".Timer .row #mints").html(minutes + " M")
    }
    if (seconds < 10) {
        $(".Timer .row #second").html("0" + seconds + " S")
    } else {
        $(".Timer .row #second").html(seconds + " S")
    }


}, 1000)


// text earea control number of litter 

$('textarea').keyup(function () {

    let lengthTextNumber = $('textarea').val().length
    let standerNumber = $('#limitNum').text()

    let rquiredSpanNumber = Number(standerNumber - 1)
    let comperChangeNumber = 100 - lengthTextNumber


    console.log("number one =" + comperChangeNumber)
    console.log("number two =" + Number(rquiredSpanNumber))


    if (rquiredSpanNumber == comperChangeNumber && rquiredSpanNumber > 0) {
        $($('#limitNum').text(rquiredSpanNumber))
    } else {
        console.log("erro")
        rquiredSpanNumber = comperChangeNumber
        $($('#limitNum').text(rquiredSpanNumber))
    }

    if (rquiredSpanNumber < 0) {
        $($('#limitNum').text("0"))
    }



})