$(document).ready(function () {

    $(function () {
        $('#btnSubmit').on('click', submit);


        function submit() {

            var frm = $(".form-elements");
            var ipg = $(".input-group");
            var fni = $("#firstName");
            var lni = $("#lastName");
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
            
          }

            frm.find(".error").hide();

            fni.on("blur", validate);

            lni.on("blur", validate);

            eml.on("blur", validate);

            eml.on("blur", validEmail);
           
            var term = getElm("terms");
            if (term.checked === false) {
              messages.push("Terms need to be accepted.");
              getElm("terms-label").classList.add(".invalid-label");
            } else {
            getElm("terms-label").classList.remove(".invalid-label");


        }
    });
});