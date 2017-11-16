/*
    Exercise 27 
*/
$(document).ready(function () {

    $("#btnvalidate").on('click', checkEmail);

    $("#btnvalidate").on('click', strReplace);
    /*=======================
        Regular Expressions 
     =======================*/
    function checkEmail() {
        var input = $("#email");
        var email = $("#email").val();
        var filter = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)
        var res = filter.test(email);

        if (res === false) {
            input.addClass("is-invalid");
        } else {
            input.removeClass("is-invalid");
        }
    }

    function strReplace() {
        var str = $("#numeric").val();
        var newStr = str.replace(/\D/g, "");
        $("#numeric").val(newStr);

        console.log(newStr);

    }


    /*=======================
      Array Methods 
    =======================*/

    var numbers = [2,3,5,10];
    var squared = numbers.map(function(x){
        return x * x;
    
    });
    console.log(squared)

});