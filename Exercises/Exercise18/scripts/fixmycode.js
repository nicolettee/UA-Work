$(document).ready(function () {

    $('#btnAddNumbers').on('click', function () {
        /*
            Retrieve the numbers from the input fields
        */
        var firstNumber = $('txtFirstNumber').val();
        var secondNumber = $('txtSecondNumber').val();
        console.log($('txtFirstNumber').val());
        /*
            Add the two numbers together
        */
        function sum() {
           return firstNumber + secondNumber;
           console.log(sum);
        };

        /*
            If our sum is greater than 10. Add a blue class to the input.
            If our sum is less than 10, add a red class
        */
        if(sum > 10){
            $('txtThirdNumber').addClass('blue');
            $('txtThirdNumber').removeClass('red');
        }else{
            $('txtThirdNumber').addClass('red');
            $('txtThirdNumber').removeClass('blue');
        }

        /*
            Update the third input field with our value.
        */
        $('#txtThirNumber').val(sum);
       
    });



});