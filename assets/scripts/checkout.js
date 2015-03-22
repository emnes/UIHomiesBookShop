// Enter pressed
$(document).ready(function(){
  $("#emailAddress").keyup(function(event){
    if(event.keyCode == 13){
        $("#firstNextButton").click();
    }
  });

  $("#postalCode").keyup(function(event){
    if(event.keyCode == 13){
        $("#secondNextButton").click();
    }
  });

  $("#securityCode").keyup(function(event){
    if(event.keyCode == 13){
        $("#placeOrderButton").click();
    }
  });
});

function validatePersonalInfo()
{
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var emailAddress = document.getElementById("emailAddress").value;

  if(firstName == "") {
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    document.getElementById("firstName").placeholder = "Enter first name...";
    document.getElementById("firstName div").className = "form-group has-error";
  } else {
    document.getElementById("firstName div").className = "form-group";
    $('#collapseOne').collapse('hide');
  }

  if(lastName == "") {
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    document.getElementById("lastName").placeholder = "Enter last name...";
    document.getElementById("lastName div").className = "form-group has-error";
  } else {
    document.getElementById("lastName div").className = "form-group";
    $('#collapseOne').collapse('hide');
  }

  if(emailAddress == "") {
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    document.getElementById("emailAddress").placeholder = "Enter email address...";
    document.getElementById("email div").className = "form-group has-error";
  } else {
    document.getElementById("email div").className = "form-group";
    $('#collapseOne').collapse('hide');
  }
}

function validateDeliveryAddress()
{
  var streetAddress1 = document.getElementById("streetAddress1").value;
  var city = document.getElementById("city").value;
  var provinceSelect = document.getElementById("province");
  var province = provinceSelect.options[provinceSelect.selectedIndex].text;
  var postalCode = document.getElementById("postalCode").value;

  if(streetAddress1 == "") {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('show');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    document.getElementById("streetAddress1").placeholder = "Enter street address...";
    document.getElementById("streetAddress1 div").className = "form-group has-error";
  } else {
    document.getElementById("streetAddress1 div").className = "form-group";
    $('#collapseTwo').collapse('hide');
  }

  if(city == "") {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('show');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    document.getElementById("city").placeholder = "Enter city...";
    document.getElementById("city div").className = "form-group has-error";
  } else {
    document.getElementById("city div").className = "form-group";
    $('#collapseTwo').collapse('hide');
  }

  if(province == "Select a Province") {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('show');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    document.getElementById("province div").className = "form-group has-error";
  } else {
    document.getElementById("province div").className = "form-group";
    $('#collapseTwo').collapse('hide');
  }

  if(postalCode == "") {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('show');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    document.getElementById("postalCode").placeholder = "Enter postal code...";
    document.getElementById("postalCode div").className = "form-group has-error";
  } else {
    document.getElementById("postalCode div").className = "form-group";
    $('#collapseTwo').collapse('hide');
  }
}

function validatePayment()
{
  var nameOnCard = document.getElementById("nameOnCard").value;
  var cardNumber = document.getElementById("cardNumber").value;
  var monthSelect = document.getElementById("month");
  var month = monthSelect.options[monthSelect.selectedIndex].text;
  var yearSelect = document.getElementById("year");
  var year = yearSelect.options[yearSelect.selectedIndex].text;
  var securityCode = document.getElementById("securityCode").value;

  var paymentValid = true;

  if(nameOnCard == "") {
    document.getElementById("nameOnCard").placeholder = "Enter name on card...";
    document.getElementById("nameOnCard div").className = "form-group has-error";
    paymentValid = false;
  } else {
    document.getElementById("nameOnCard div").className = "form-group";
  }

  if(cardNumber == "") {
    document.getElementById("cardNumber").placeholder = "Enter card number...";
    document.getElementById("cardNumber div").className = "form-group has-error";
    paymentValid = false;
  } else {
    document.getElementById("cardNumber div").className = "form-group";
  }

  if(month == "Month") {
    document.getElementById("expiryDate div").className = "form-group has-error";
    paymentValid = false;
  } else {
    document.getElementById("expiryDate div").className = "form-group";
  }

  if(year == "Year") {
    document.getElementById("expiryDate div").className = "form-group has-error";
    paymentValid = false;
  } else {
    document.getElementById("expiryDate div").className = "form-group";
  }

  if(securityCode == "") {
    document.getElementById("securityCode").placeholder = "Enter code...";
    document.getElementById("securityCode div").className = "form-group has-error";
    paymentValid = false;
  } else {
    document.getElementById("securityCode div").className = "form-group";
  }

  if(paymentValid == true)
    $('#paymentModal').modal('show');
}

function firstNextPressed()
{
  $('#collapseTwo').on('shown.bs.collapse', function () {
    validatePersonalInfo();
  })
  $('#collapseThree').on('shown.bs.collapse', function () {
    validatePersonalInfo();
  })
  $('#collapseFour').on('shown.bs.collapse', function () {
    validatePersonalInfo();
  })
}

function secondNextPressed()
{
  $('#collapseThree').on('shown.bs.collapse', function () {
    validateDeliveryAddress();
  })
  $('#collapseFour').on('shown.bs.collapse', function () {
    validateDeliveryAddress();
  })
}

function placeOrderPressed()
{
  validatePayment();
}