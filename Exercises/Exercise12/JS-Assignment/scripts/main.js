function update() {
    /* ===================
        Your code starts here
    =====================*/

    //Create new array.
    var messages = []
    //If first name is empty. Add it to the array
    var fName = getValue("firstName");
    if (fName.length === 0){
        messages.push("First Name is Required. ");
    }
    //If last name is empty. Add it to the array
    var lName = getValue("lastName");
    if (lName.length === 0){
        messages.push("Last Name is Required. ");
    }

    //If email is empty. Add it to the array
    var eMail = getValue("emailAddress");
    if (eMail.length === 0){
        messages.push("Email Address is Required.");
    }
    //Loop through array
    var html = "<ul>"
    for (var i = 0; i < messages.length; i++){
        html = html + "<li>" + messages[i] + "</li>"
    }
    html = html + "</ul>";
    getElm("error-list").innerHTML = messages;

    //Create javascript object for the user
var user = {
    firstName: fName,
    lastName: lName,
    email: eMail,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
    //log the user object to the console
     console.log(user);
    //Check to see if everything is valid
    messages.length
    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
    var submittedDate = new Date(2017, 7, 28);

    //Make the alert box.
    if (messags.length === 0){
    alert(submittedDate);
    }
    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}