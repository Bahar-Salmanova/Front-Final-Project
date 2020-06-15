$(document).ready(function () {
     /*home mousemove olunanda*/
     $(".home").on("mouseover", function () {
        $("#head .header .head .home .home-drop").removeClass("d-none").addClass("d-block");
        $("#head .header .head .home .fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
    })
    $(".home").on("mouseout", function () {
        $("#head .header .head .home .home-drop").removeClass("d-block").addClass("d-none");
        $("#head .header .head .home .fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
    })

    /*company mousemove olunanda*/
    $("#head .header .head .company p").on("mouseover", function () {
        $("#head .header .head .company .home-drop").removeClass("d-none").addClass("d-block");
        $("#head .header .head .company .fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
    })
    $("#head .header .head .company p").on("mouseout", function () {
        $("#head .header .head .company .home-drop").removeClass("d-block").addClass("d-none");
        $("#head .header .head .company .fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
    })

    /*services*/
    $("#head .header .head .services p").on("mouseover", function () {
        $("#head .header .head .services .home-drop").removeClass("d-none").addClass("d-block");
        $("#head .header .head .services .fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
    })
    $("#head .header .head .services p").on("mouseout", function () {
        $("#head .header .head .services .home-drop").removeClass("d-block").addClass("d-none");
        $("#head .header .head .services .fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
    })

    /*case-studies*/
    $("#head .header .head .case-studies p").on("mouseover", function () {
        $("#head .header .head .case-studies .home-drop").removeClass("d-none").addClass("d-block");
        $("#head .header .head .case-studies .fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
    })
    $("#head .header .head .case-studies p").on("mouseout", function () {
        $("#head .header .head .case-studies .home-drop").removeClass("d-block").addClass("d-none");
        $("#head .header .head .case-studies .fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
    })

    /*blog*/
    $("#head .header .head .blog p").on("mouseover", function () {
        $("#head .header .head .blog .home-drop").removeClass("d-none").addClass("d-block");
        $("#head .header .head .blog .fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
    })
    $("#head .header .head .blog p").on("mouseout", function () {
        $("#head .header .head .blog .home-drop").removeClass("d-block").addClass("d-none");
        $("#head .header .head .blog .fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
    })
    /*search*/
    $(".search .fa-search").click(function () {
        $(".search #search").toggleClass("d-none");

    })
    $(".fa-list-ul").click(function (e) {
        e.preventDefault();
        $(".contact1").addClass("on");
    })


    $(".contact1 .fa-times").click(function () {
        console.log("test")
        $(".contact1").addClass("d-none")
    })
    /*owl karusel*/

    $(".karusel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    })

    //-- Executing


    $(".karusel").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    });
    $(".karusel2").owlCarousel({
        center: true,
        items: 3,
        loop: true,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    if ($(window).scrollTop() > 1) {
        $(".fixed-top").removeClass("d-none");
        $(".unfixed-top").addClass("d-none");
    }
    else {
        $(".unfixed-top").removeClass("d-none");
        $(".fixed-top").addClass("d-none");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $(".fixed-top").removeClass("d-none");
            $(".unfixed-top").addClass("d-none");
        }
        else {
            $(".unfixed-top").removeClass("d-none");
            $(".fixed-top").addClass("d-none");
        }
    })
    $('.timer').countTo();
    $(".peoplecount").appear(function () {
        $('.timer').countTo();
    }, {
        accY: -100
    })


   


})

