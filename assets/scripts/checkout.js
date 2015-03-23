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
    document.getElementById("firstName").placeholder = "First name required...";
    document.getElementById("firstName div").className = "form-group has-error";
  } else if(!firstName.match(/^[A-Za-z]+$/)) {
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    if(document.getElementById("firstNameError") == null)
      $('#firstName').after('<span id="firstNameError" style="color:#a74544">First name must have letters only</span>');
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
    document.getElementById("lastName").placeholder = "Last name required...";
    document.getElementById("lastName div").className = "form-group has-error";
  } else if(!lastName.match(/^[A-Za-z]+$/)) {
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    if(document.getElementById("lastNameError") == null)
      $('#lastName').after('<span id="lastNameError" style="color:#a74544">Last name must have letters only</span>');
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
    document.getElementById("emailAddress").placeholder = "Email address required...";
    document.getElementById("emailAddress div").className = "form-group has-error";
  } else if(!emailAddress.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    $('#collapseOne').collapse('show');
    $('#collapseTwo').collapse('hide');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    if(document.getElementById("emailAddressError") == null)  
      $('#emailAddress').after('<span id="emailAddressError" style="color:#a74544">Wrong email format</span>');
    document.getElementById("emailAddress div").className = "form-group has-error";
  } else {
    document.getElementById("emailAddress div").className = "form-group";
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
    document.getElementById("streetAddress1").placeholder = "Street address required...";
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
    document.getElementById("city").placeholder = "City required...";
    document.getElementById("city div").className = "form-group has-error";
  } else if(!city.match(/^[A-Za-z]+$/)) {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('show');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    if(document.getElementById("cityError") == null)
      $('#city').after('<span id="cityError" style="color:#a74544">City must have letters only</span>');
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
    document.getElementById("postalCode").placeholder = "Postal code required...";
    document.getElementById("postalCode div").className = "form-group has-error";
  } else if(!postalCode.match(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i)) {
    $('#collapseOne').collapse('hide');
    $('#collapseTwo').collapse('show');
    $('#collapseThree').collapse('hide');
    $('#collapseFour').collapse('hide');
    if(document.getElementById("postalCodeError") == null)
      $('#postalCode').after('<span id="postalCodeError" style="color:#a74544">Postal code must have one of the following formats: A1A1A1 or A1A 1A1</span>');
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
    document.getElementById("nameOnCard").placeholder = "Name on card required...";
    document.getElementById("nameOnCard div").className = "form-group has-error";
    paymentValid = false;
  } else if(!nameOnCard.match(/^[A-Za-z\s]+$/)) {
    if(document.getElementById("nameOnCardError") == null)
      $('#nameOnCard').after('<span id="nameOnCardError" style="color:#a74544">Name on card must have letters and spaces only</span>');
    document.getElementById("nameOnCard div").className = "form-group has-error";
  } else {
    document.getElementById("nameOnCard div").className = "form-group";
  }

  if(cardNumber == "") {
    document.getElementById("cardNumber").placeholder = "Card number required...";
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
    document.getElementById("securityCode").placeholder = "Code required...";
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