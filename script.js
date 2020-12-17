var x = document.getElementById("nseats").value[1];


function search() {
    document.getElementById("f2").hidden = false;
}
function min() {
    document.getElementById("ddate").min.value=new Date();
}

document.getElementById("price").innerHTML = Math.floor(Math.random() * 200);

function gopay() {
    document.getElementById("pay").hidden = false;
}
// The event handler function for the name text box
// var myName = document.getElementById("nameCard");var pos = myName.value.search(/^\d{4}-\d{4}-\d{4}-\d{4}$/);if (pos != 0) {alert("you should enter the number like this \n xxxx-xxxx-xxxx-xxxx");myName.focus();myName.select();return false;} else{return true};
function chknum() {
    var myNum = document.getElementById("numCard");

// Test the format of the input name 
//  Allow the spaces after the commas to be optional
//  Allow the period after the initial to be optional

    var pos1 = myNum.value.search(/^\d{4}-\d{4}-\d{4}-\d{4}$/);

    if (pos1 != 0) {
      alert("you should enter the number like this \n xxxx-xxxx-xxxx-xxxx");
      myNum.focus();
      myNum.select();
      return false;
    } else
      return true;
  }

  function chkexp() {
    var exp = document.getElementById("exp");
    var pos2 = exp.value.search(/^\d{2}\/\d{2}$/);

    if (pos2 != 0) {
      alert("please enter the Expiration date like this \n mm/yy ");
      exp.focus();
      exp.select();
      return false;
    } else
      return true;
  }

  function chkcvv() {
    var cvv = document.getElementById("cvv");
    var pos3 = exp.value.search(/^\d{3}$/);

    if (pos3 != 0) {
      alert("please enter the CVV");
      cvv.focus();
      cvv.select();
      return false;
    } else
      return true;
  }

  function sub() {
    alert("your ticket is booked");
    location.href = "index.html";
  }

