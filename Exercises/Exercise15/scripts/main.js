$(document).ready(function () {

    ///// Code goes here
    //Part 1
    function notify() {
        alert("clicked");
    }
    $("#btnOne").on("click", notify);
    //Part 2
    function update() {
        $(".update-html").html('<h3>Hello Word!</h3>')
    }
    $("#btnTwo").on("click", update);
    //Part 3
    function text() {
        $("#text-update").val('Hello Word!')
    }
    $("#btnThree").on("click", text);
    //Part 4
    function copyHtml() {
        var copy = $(".copy-html").html();
        $(".paste-html").html(copy)
    }
    $("#btnCopyHtml").on("click", copyHtml);
    //Part 5
    function copyValue() {
        var copyVal = $("#copy-text").val();
        $("#paste-text").val(copyVal)
    }
    $("#btnCopyValues").on("click", copyValue);


});