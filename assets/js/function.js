function getCurrentExchange(){
  var number = document.getElementById("number").value;
  var standard_currency = document.getElementById("standard_currency").value;
  if(number == ""){
     alert("Please enter your number");
  if(standard_currency == ""){
     alert("Please enter your standard currency");
  }
  }else{
    document.getElementById("result").innerHTML = number * standard_currency + " VNĐ ";
    document.getElementById("result").style.textAlign = "center";
    document.getElementById("result").style.color = "orange";
  }
}