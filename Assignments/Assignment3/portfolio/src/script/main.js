$(document).ready(function () {
    
    
        var frm = $(".form-elements");
        var ipg = $(".input-group");
        var ni = $("#name");
        var eml = $("#emailAddress");
    
        function validate() {
            var input = $(this);
            var errorMsg = input.closest(".input-group").find(".requiredMsg");
    
            if (input.val() === "") {
                errorMsg.fadeIn("slow")
            } else {
                errorMsg.fadeOut("slow")
            }
        }
    
        function validEmail() {
            var input = $(this);
            var inputVal = input.val()
            var errorMsg = input.closest(".input-group").find(".emailMsg");
    
            if (inputVal.indexOf("@") === -1 || inputVal.indexOf(".com") === -1) {
                errorMsg.fadeIn("slow")
            } else {
                errorMsg.fadeOut("slow")
            }
        }
    
        frm.find(".error").hide();
    
        ipg.filter(":even").addClass("even");
    
        ni.on("blur", validate);
    
        eml.on("blur", validate);
    
        eml.on("blur", validEmail);
    
    });