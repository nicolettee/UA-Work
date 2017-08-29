var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var fullName = firstName + " " + lastName;
    var p1_Valid = "";
    console.log(firstName);
    console.log(lastName);
    getElm("p1_fullName").innerHTML = fullName;
    if (firstName.length === 0 || lastName.length === 0){
    p1_Valid = false;
}
 getElm("p1_valid").innerHTML = p1_Valid;

fullName.length;
getElm("p1_fullNameLength").innerHTML = fullName.length;


   
// Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);
    getElm("p2_email").innerHTML = emailAddress;
    
    var isValidEmail = (emailAddress.indexOf('@') > -1);
    if (isValidEmail === true){
        console.log("boom");
    } else{
        console.log("whaa");
        alert("Please enter valid email.");
    }
    console.log("isVAlidEmail = " + isValidEmail); 
   getElm("p2_valid").innerHTML = isValidEmail;
 
    emailAddress.length;
    getElm("p2_emailLength").innerHTML = emailAddress.length;

   
   // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
    getElm("p3_number").innerHTML = randomNumber;
 
    !isNaN(randomNumber);
    getElm("p3_valid").innerHTML = !isNaN(randomNumber);
 

    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
    arrayItems.push(arrayInput);
    
    getElm("p4_arraylength").innerHTML = arrayItems.length;


    getElm("p4_valid").innerHTML = arrayItems;





    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}

