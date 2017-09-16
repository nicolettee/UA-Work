$(document).ready(function () {

    /*  
    $("#btnShow").on("click", display);
    function display(){
        $(".display-basic").show();
        console.log("d");
    };*/

    var b = {
        s: "#btnShow",
        h: "#btnHide",
        t: "#btnToggle",
        fi: "#btnFadeIn",
        fo: "#btnFadeOut",
        ft: "#btnFadeToggle",
        sd: "#btnSlideDown",
        su: "#btnSlideUp",
        st: "#btnSlideToggle"
    }
    var d = {
        s: "show",
        h: "hide",
        t: "toggle",
        fi: "fadeIn",
        fo: "fadeOut",
        ft: "fadeToggle",
        sd: "slideDown",
        su: "slideUp",
        st: "slideToggle"
    };
    var e = {
        db: ".display-basic",
        df: ".display-fade",
        ds: ".display-slide"
    }

    //Part 2
    //show
    $(b.s).on("click",  function () {
        $(e.db)[d.s]();
    });
    //hide
    $(b.h).on("click",  function () {
        $(e.db)[d.h]();
    });
    //toggle
    $(b.t).on("click",  function () {
        $(e.db)[d.t]();
    });
    //Part 3
        $(".part3").show();
    
    //Part 4
    //fade in
    $(b.fi).on("click",  function () {
        $(e.df)[d.fi]("fast");
    });
     //fade out 
     $(b.fo).on("click",  function () {
        $(e.df)[d.fo]("slow");
    });
    // fade toggle
    $(b.ft).on("click", function () {
        $(e.df)[d.ft]();
    });

    //Part 5
    //slide down
    $(b.sd).on("click",  function () {
        $(e.ds)[d.sd](1000);
    });
    //
    $(b.su).on("click",  function () {
        $(e.ds)[d.su](500);
    });
    //
    $(b.st).on("click",  function () {
        $(e.ds)[d.st]("fast");
    });
});