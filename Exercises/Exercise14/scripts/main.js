var btnSub = getElm("btnSubmit").addEventListener("click", submit);
var btnRes = getElm("btnReset").addEventListener("click", reset);

var messages = [];

var elms = [getElm("userName"), getElm("emailAddress"), getElm("password")];
function submit() {
  messages.length = 0;
  for (i = 0; i < elms.length; i++) {
    //Function for username, email, and password
    var elm = elms[i];
    if (elm.value.length === 0) {
      messages.push(elm.placeholder + " is required. ");
      elm.classList.add("invalid");
      console.log(elm.placeholder + " is required. ");
    } else {
      elm.classList.remove("invalid");
    }
  } //end for loop

    //time function
     var time = getElm("timezone")
    if(time.value === ""){
    messages.push("Timezone is required.");
    time.classList.add("invalid");
    console.log("Timezone is required.");
  }else{
      time.classList.remove("invalid");
  }
    //terms function
    var term = getElm("terms");
    if (term.checked === false) {
      messages.push("Terms need to be accepted.");
      term.classList.add(".invalid-label");
    } else {
      term.classList.remove(".invalid-label");
    

    getElm("message").innerHTML = messages;
  }
  var top;
  {
    //I borrowed this from Daniel.
    if (messages.length > 0) {
      top =
        '<ul class="errors"><li>' + messages.join("</li><li>") + "</li></ul>";
    } else {
      top = "<h1>Success!</h1>";
      reset();
    }
    getElm("message").innerHTML = top;
  }
}
//End of submit function

//Start reset function
function reset() {
  for (i = 0; i < elms.length; i++) {
    var elm = elms[i];
    var term = getElm("terms");
    var time = getElm("timezone")
    elm.value = "";
    elm.classList.remove("invalid");
    term.classList.remove("invalid");
    time.classList.remove("invalid");
    getElm("message").innerHTML = "";
    messages.length = 0;
  }
  getElm("message").innerHTML = "";
  getElm("terms").checked = false;
  getElm("timezone").value = "";
}

function getElm(id) {
  return document.getElementById(id);
}
